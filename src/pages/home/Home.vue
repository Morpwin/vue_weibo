<template>
	<div class="home">
		<home-zan @listenClickZan="listenClickZan" :zan="zan"></home-zan>
		<home-header></home-header>
		<home-swiper :sloganData="sloganData"></home-swiper>
		<div class="content">
			<home-article :dataShow="dataShow"></home-article>
			<home-me></home-me>
		</div>
		<home-pagination @listenPrev="listenPrev" @listenNext="listenNext"></home-pagination>
		<home-footer></home-footer>
	</div>
</template>
	
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeArticle from './components/article'
import HomeMe from './components/me'
import HomePagination from './components/pagination'
import HomeZan from './components/zan'
import HomeFooter from './components/footer'
import * as sysTools from '../../assets/js/sysTools.js'
import timeTool from '../../assets/js/timeTool.js'
import axios from 'axios'

export default{
	name: "Home",
	components: {
		HomeHeader,
		HomeSwiper,
		HomeArticle,
		HomeMe,
		HomePagination,
		HomeZan,
		HomeFooter
	},
	data() {
		return {
			articleList: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 6,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: [],
      // 默认当前显示第一页
      currentPage: 0,
			//存放标语的数据
			sloganData: {},
			//点赞的标志
			zanFlag: "",
			//点赞的数量
			zan: 0,
			//访问量
			visits: 0,
			//新旧访客
			visitFlag: false,
			//ip地址
			ip: '1.1.1.1',
			//浏览器
      brower: 'chrome',
			//操作系统
      os: 'windows7' 
		}
	},
	created() {
		let that = this
		//记录进来的人的身份
		this.ip = sessionStorage.getItem('ip')
		this.brower = sysTools.GetCurrentBrowser()
		this.os = sysTools.GetOs()
		let peopleData = {
			ip: this.ip,
			brower: this.brower,
			os: this.os,
			time: timeTool()
		}
		//设置访客信息，如果是新访客，flag = false，旧访客，flag = true
		axios.post('http://121.40.244.57:3000/people/setPeople',peopleData).then(res => {   
			if(res.data.code == 1) {
				//保留访问flag
				this.visitFlag = res.data.visitFlag  
				//保留赞flag
				this.zanFlag = res.data.zanFlag
				//获取访问量
				axios.get('http://121.40.244.57:3000/sign/getVisits').then(res => {  
					if(res.data.code == 1) {
						//若是新访客，则访问量+1，若不是，保持不变
						if(!this.visitFlag) {
							this.visits = res.data.visits + 1
						}
						else {
							this.visits = res.data.visits
						}
						//设置访问量
						axios.post('http://121.40.244.57:3000/sign/setVisits',{visits: this.visits}).then((res) => {
							if(res.data.code == 1) {
								//打印访问量
								window.console.log("visits:" + this.visits)  
							}
						}).catch(err => {
							window.console.log(err)
						})
					}
				}).catch(err => {
					window.console.log(err)
				})
			}
		}).catch(err => {
			window.console.log(err)
		})
		//初始化文章
		axios.get('http://121.40.244.57:3000/article/getArticle').then(function(res) {
			for(let i in res.data.data) {
				that.articleList.push(res.data.data[i])
			}
			that.$store.dispatch("getArticleFun",that.articleList)
			that.pageNum = Math.ceil(that.articleList.length / that.pageSize) || 1;	
			for (let i = 0; i < that.pageNum; i++) {
				that.totalPage[i] = that.articleList.slice(that.pageSize * i, that.pageSize * (i + 1))
			}
			that.dataShow = that.totalPage[that.currentPage].reverse()
		})
	},
	mounted() {
		let that = this	
		//初始化标语
		axios.get('http://121.40.244.57:3000/article/getSlogan').then(function(res) {
			that.sloganData = res.data.data[0]
		})
		//初始化赞
		axios.get("http://121.40.244.57:3000/sign/getZan").then(res => {
			if(res.data.code == 1) {
				this.zan = res.data.zan
			}
		}) 
	},
	methods: {
		listenNext() {
			if (this.currentPage == this.pageNum - 1) {
				alert("这已经是最后一页了")
				return
			}
			this.dataShow = this.totalPage[++this.currentPage].reverse()
		},
		// 上一页
		listenPrev() {
			if (this.currentPage == 0) {
				alert("这已经是第一页了")
				return
			}
			this.dataShow = this.totalPage[--this.currentPage].reverse()
		},
		//监听点赞
		listenClickZan() {
			let that = this
			//获取当前的点赞量
			axios.get("http://121.40.244.57:3000/sign/getZan").then(function (res) {
				if(res.data.code == 1) {
					window.console.log("res.data.zan:" + res.data.zan)
					if(!that.zanFlag) {
						that.zan = res.data.zan + 1
						window.console.log("that.zan:" + that.zan)
						axios.post("http://121.40.244.57:3000/sign/setZan", {zan: that.zan}).then(function (res) {
							if(res.data.code == 1) {
								that.zanFlag = true
								let peopleData = {
									ip: that.ip,
									brower: that.brower,
									os: that.os,
									time: timeTool(),
									zanFlag: that.zanFlag
								}
								axios.post("http://121.40.244.57:3000/people/setPeople", peopleData).then(res => {
									window.console.log(res)
								})
							}
						})
					}
				}
			})			
		}
	}
}
</script>

<style scoped="scoped">
	.home{
		width: 100%;
		max-width: 1200px;
		min-width: 320px;
		margin: 0 auto;
	}
	.content{
		margin-top: 10px;
		display: flex;
	}
</style>

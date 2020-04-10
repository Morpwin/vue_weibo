<template>
	<div class="home">
		<home-zan @listenClickZan="listenClickZan" :zan="zan" :supFlag="supFlag" class="mobile"></home-zan>
		<transition name="head">
			<home-header  v-show="this.$store.state.headerFlag"></home-header>
		</transition>
		<home-swiper :sloganData="sloganData" class="mobile"></home-swiper>
		<div class="content">
			<home-article :dataShow="dataShow"></home-article>
			<home-me class="mobile"></home-me>
		</div>
		<home-pagination @listenPrev="listenPrev()" @listenNext="listenNext()" class="fadeInLeft"></home-pagination>
		<home-footer class="mobile"></home-footer>
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
import scrollReveal from 'scrollreveal';

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
      allPage: 0,
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: [],
      // 数据总数量
      count: 0,
			//存放标语的数据
			sloganData: {},
			//点赞的标志
			supFlag: false,
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
      os: 'windows7' ,
			scrollReveal: scrollReveal(),
			//移动端
			mobileFlag: true
		}
	},
	created() {
		//记录进来的人的身份

		this.renderList()
		this.renderSlogan()
		this.renderPeople()
		this.renderSupport()
		this.renderSign()
	},
	mounted() {
		//初始化scrollReveal
		this.scrollReveal.reveal('.fadeInBottom', {
			// 动画的时长
			duration: 800,
			// 延迟时间
			delay: 0,
			// 动画开始的位置，'bottom', 'left', 'top', 'right'
			origin: 'bottom',
			// 回滚的时候是否再次触发动画
			reset: true,
			// 在移动端是否使用动画
			mobile: false,
			// 滚动的距离，单位可以用%，rem等
			distance: '100px',
			// 其他可用的动画效果
			easing: 'linear',
		})
		
		
	},
	methods: {
		renderList() {
			//初始化文章
			axios.post("http://" + window.location.hostname + ":3001/article/getArticle", {pageNum: this.pageNum, pageSize: this.pageSize})
			.then((res) =>{
				if(res.data.err == 0) {
					this.dataShow = res.data.msg.data
					this.allPage = res.data.msg.allPage
					this.count = res.data.msg.count
				}
				else {
					window.console.log(res.data.msg)
				}
			})
		},
		renderSlogan() {
			//初始化标语
			axios.get("http://" + window.location.hostname + ":3001/slogan/getSlogan").then((res) => {
				window.console.log(res.data.msg[0])
				this.sloganData = res.data.msg[0]
			})
		},
		renderPeople() {
			this.ip = sessionStorage.getItem('ip')
			this.brower = sysTools.GetCurrentBrowser()
			this.os = sysTools.GetOs()
			sessionStorage.setItem("brower", sysTools.GetCurrentBrowser())
			sessionStorage.setItem("os", sysTools.GetOs())
			let time = timeTool()
			axios.post("http://" + window.location.hostname + ":3001/people/setPeople", 
			{ip: this.ip, brower: this.brower, os: this.os, time: time, supFlag: false})
			.then((res) => {
				if(res.data.err == 0) {
					window.console.log("添加游客成功")
				}
				if(res.data.err == -1) {
					window.console.log("添加游客失败")
				}
				if(res.data.err == -2) {
					window.console.log("获取ip失败")
				}
			})
		},
		renderSupport() {
			//初始化赞
			axios.get("http://" + window.location.hostname + ":3001/sign/getSupport").then(res => {
				if(res.data.err == 0) {
					this.zan = res.data.msg[0].sup
				}
			})
		},
		renderSign() {
			//初始化标记
			let ip = sessionStorage.getItem("ip")
			let os = sessionStorage.getItem("os")
			let brower = sessionStorage.getItem("brower")
			axios.post("http://" + window.location.hostname + ":3001/people/getPeople", {ip, os, brower})
			.then((res) => {
				if(res.data.err == 0) {
					window.console.log(res.data.msg[0])
					this.supFlag = res.data.msg[0].supFlag
				}
				if(res.data.err == -1) {
					window.console.log(res.data.msg)
				}
				if(res.data.err == -2) {
					window.console.log(res.data.msg)
				}
			})
		},
		listenNext() {
			if (this.pageNum == this.allPage) {
				alert("这已经是最后一页了")
				return
			}
			else {
				this.pageNum ++
				this.$nextTick(() => {
					this.renderList()
				})
			}
		},
		// 上一页
		listenPrev() {
			if (this.pageNum == 1) {
				alert("这已经是第一页了")
				return
			}
			else {
				this.pageNum --
				this.$nextTick(() => {
					this.renderList()
				})
			}
		},
		listenClickZan() {
			let ip = sessionStorage.getItem("ip")
			let os = sessionStorage.getItem("os")
			let brower = sessionStorage.getItem("brower")
			axios.post("http://" + window.location.hostname + ":3001/sign/setSupport", {ip, os, brower})
			.then((res) => {
				if(res.data.err == 0) {
					this.supFlag = true
					this.renderSupport()
					window.console.log(res.data.msg)
				}
				if(res.data.err == -1) {
					this.supFlag = false
					window.console.log(res.data.msg)
				}
				if(res.data.err == -2) {
					this.supFlag = true
					window.console.log(res.data.msg)
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
		width: 100%;
	}
</style>

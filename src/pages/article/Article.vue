<template>
	<div class="article">
		<transition name="head">
			<home-header  v-show="this.$store.state.headerFlag"></home-header>
		</transition>
		<div class="art_content">
			<home-article :dataShow="dataShow" v-if="!flag"></home-article>
			<article-tip v-if="flag"></article-tip>
			<home-me class="mobile"></home-me>
		</div>
		<home-pagination @listenPrev="listenPrev" @listenNext="listenNext" class="mobile fadeInLeft"></home-pagination>

	</div>
</template>

<script>
import HomeHeader from '.././home/components/header'
import HomeArticle from '.././home/components/article'
import HomeMe from '.././home/components/me'
import HomePagination from '.././home/components/pagination'
import ArticleTip from "./components/tip"
import axios from "axios"

export default{
	name: "Article",
	components: {
		HomeMe,
		HomeHeader,
		HomeArticle,
		HomePagination,
		ArticleTip
	},
	data() {
		return {
			count: 0,
			// 所有页面的数据
			allPage: 0,
			// 每页显示数量
			pageSize: 5,
			// 共几页
			pageNum: 1,
			// 当前显示的数据
			dataShow: [],
			// 默认当前显示第一页
			currentPage: 0,
			type: this.$route.query.type,
			flag: false
		}
	},
	watch: {
		$route() {
			this.type = this.$route.query.type
		},
		type() {
			this.getTypeList()
		}
	},
	mounted() {
		if(this.type == "all") {
			this.renderList()
		}
		else {
			this.getTypeList()
		}
	},
	methods: {
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
		renderList() {
			//初始化文章
			axios.post("http://" + window.location.hostname + ":3001/article/getArticle", {pageNum: this.pageNum, pageSize: this.pageSize})
			.then((res) =>{
				if(res.data.err == 0) {
					this.dataShow = res.data.msg.data
					this.allPage = res.data.msg.allPage
					this.count = res.data.msg.count
					if(res.data.msg.data.length == 0) {
						this.flag = true
					}
					else {
						this.flag = false
					}
				}
				else {
					window.console.log(res.data.msg)
				}
			})
		},
		getTypeList() {
			axios.post("http://" + window.location.hostname + ":3001/article/getTypeArticle", {type: this.type})
			.then((res) =>{
				if(res.data.err == 0) {
					this.dataShow = res.data.msg
					if(res.data.msg.length == 0) {
						this.flag = true
					}
					else {
						this.flag = false
					}
				}
				else {
					window.console.log(res.data.msg)
				}
			})
		}
// 		init() {
// 			let that = this
// 			window.console.log(this.type)
// 			axios.get("http://" + window.location.hostname + ":3000/article/getArticle").then(function(res) {
// 				that.articleList = []
// 				for(let i in res.data.data) {
// 					if(that.type == res.data.data[i].type) {
// 						that.articleList.push(res.data.data[i])
// 					}
// 					if(that.type == "all") {
// 						that.articleList.push(res.data.data[i])
// 					}
// 				}
// 				that.pageNum = Math.ceil(that.articleList.length / that.pageSize) || 1;	
// 				for (let i = 0; i < that.pageNum; i++) {
// 					that.totalPage[i] = that.articleList.slice(that.pageSize * i, that.pageSize * (i + 1))
// 				}
// 				that.dataShow = that.totalPage[that.currentPage]
// 				if(that.dataShow.length == 0) {
// 					that.flag = true
// 				}
// 				else {
// 					that.flag = false
// 				}
// 			})
// 		}
	}
}
</script>

<style scoped="scoped">
	.article{
		width: 100%;
		max-width: 1200px;
		min-width: 320px;
		margin: 0 auto;
	}
	.art_content{
		margin-top: 60px;
		display: flex;
		width: 100%;
	}
</style>

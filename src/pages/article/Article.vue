<template>
	<div class="article">
		<home-header></home-header>
		<div class="content">
			<home-article :dataShow="dataShow" v-if="!flag"></home-article>
			<article-tip v-if="flag"></article-tip>
			<home-me></home-me>
		</div>
		<home-pagination @listenPrev="listenPrev" @listenNext="listenNext"></home-pagination>

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
			articleList: [],
			// 所有页面的数据
			totalPage: [],
			// 每页显示数量
			pageSize: 10,
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
			this.init()
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		listenNext() {
			if (this.currentPage == this.pageNum - 1) {
				alert("这已经是最后一页了")
				return
			}
			this.dataShow = this.totalPage[++this.currentPage];
		},
		// 上一页
		listenPrev() {
			if (this.currentPage == 0) {
				alert("这已经是第一页了")
				return
			}
			this.dataShow = this.totalPage[--this.currentPage];
		},
		init() {
			let that = this
			window.console.log(this.type)
			axios.get('http://121.40.244.57:3000/article/getArticle').then(function(res) {
				that.articleList = []
				for(let i in res.data.data) {
					if(that.type == res.data.data[i].type) {
						that.articleList.push(res.data.data[i])
					}
					if(that.type == "all") {
						that.articleList.push(res.data.data[i])
					}
				}
				that.pageNum = Math.ceil(that.articleList.length / that.pageSize) || 1;	
				for (let i = 0; i < that.pageNum; i++) {
					that.totalPage[i] = that.articleList.slice(that.pageSize * i, that.pageSize * (i + 1))
				}
				that.dataShow = that.totalPage[that.currentPage]
				if(that.dataShow.length == 0) {
					that.flag = true
				}
				else {
					that.flag = false
				}
			})
		}
	}
}
</script>

<style scoped="scoped">
	.article{
		width: 120rem;
		margin: 0 auto;
	}
	.content{
		margin-top: 1rem;
		display: flex;
	}
</style>

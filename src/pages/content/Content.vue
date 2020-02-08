<template>
	<div class="content">
		<home-header></home-header>
		<div class="box">
			<content-main :article="article"></content-main>
			<home-me></home-me>
		</div>
	</div>
</template>

<script>
import HomeHeader from '.././home/components/header'
import HomeMe from '.././home/components/me'
import ContentMain from './components/main'
import axios from 'axios'
export default{
	name: "Content",
	components: {
		HomeHeader,
		HomeMe,
		ContentMain
	},
	data() {
		return {
			articleId: this.$route.params.articleId,
			article: {}
		}
	},
	mounted() {
		let that = this
		axios.get("http://121.40.244.57:3000/article/getArticle",{params: {articleId: that.articleId}}).then(function (res) {
			that.article = res.data.article
			window.console.log(that.article)
		})
		
	}
}
</script>

<style scoped="scoped">
	.content{
		width: 100%;
		max-width: 1200px;
		min-width: 320px;
		margin: 0 auto;
	}
	.box{
		margin-top: 10px;
		display: flex;
	}
</style>

<template>
	<div class="content">
		<transition name="head">
			<home-header  v-show="this.$store.state.headerFlag"></home-header>
		</transition>
		<div class="box">
			<content-main :article="article"></content-main>
			<home-me class="mobile"></home-me>
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
			articleId: this.$route.query._id,
			title: this.$route.query.title,
			article: {}
		}
	},
	mounted() {
		axios.post("http://" + window.location.hostname + ":3001/article/getOnlyArticle",{_id: this.articleId})
		.then((res) => {
			if(res.data.err == 0) {
				this.article = res.data.msg[0]
			}
			else {
				window.console.log(res.data.msg)
			}
		})
	},
	methods: {
		
	},
	beforeRouteEnter(to, from, next) {
		document.title = `${to.query.title} - 孜然粉的博客`
    next()
	},
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
		margin-top: 60px;
		display: flex;
		width: 100%;
	}
</style>

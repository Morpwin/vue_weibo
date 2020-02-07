<template>
	<div class="header border-bottom">
		<ul ref="ul" class="ul">
			<li class="now"><router-link tag="a" to="/">首页</router-link></li>
			<li><router-link tag="a" :to="{path:'/article',query:{type:'all'}}">文章</router-link></li>
		</ul>
		<div class="search">
			<span></span>
			<input type="text" v-model="keyword">
			<ul v-if="showList">
				<router-link tag="li" v-for="(item, index) in newlist" :key="index" :to="'/content/' + item._id">{{item.title}}</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name: "HomeHeader",
	data() {
		return {
			keyword: "",
			articleList: [],
			newlist: [],
			showList: false
		}
	},
	watch: {
		keyword: function (val) {
			window.console.log(this.articleList)
			let list = []	
			for(let i = 0; i < this.articleList.length; i++) {
				if(this.articleList[i].title.indexOf(val) != -1) {
					list.push(this.articleList[i])
				}
			}
			this.newlist = list
			if(val) {
				this.showList = true
			}
			else {
				this.showList = false
			}
		},
	},
	created() {
		let that = this
		axios.get('http://121.40.244.57:3000/article/getArticle').then(function(res) {
			for(let i in res.data.data) {
				that.articleList.push(res.data.data[i])
			}
		})
	},
	mounted() {
		let ul = this.$refs.ul
		if(window.location.href == "http://121.40.244.57/dist/index.html#/") {
			ul.children[0].className = "now"
			ul.children[1].className = ""
		}
		else if(window.location.href.includes("http://121.40.244.57/dist/index.html#/article") || window.location.href.includes("http://121.40.244.57/dist/index.html#/content") ) {
			ul.children[1].className = "now"
			ul.children[0].className = ""
		}
	}
}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 6rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.header .ul{
		display: flex;
		height: 6rem;
		justify-content: flex-end;
		align-items: center;
		margin-right: 10rem;
	}
	.header .ul li{
		width: 10rem;
		height: 5.5rem;
		line-height: 5.5rem;
		text-align: center;
		border-bottom: 5px solid #fff;
	}
	.header .ul li.now{
		border-bottom: 5px solid #10D07A;
	}
	.header .ul li a{
		color: #000;
	}
	.header input{
		width: 20rem;
		height: 2.6rem;
		border: 1px solid #ccc;
		margin-right: 1rem;
		padding: 0 1rem 0 2.2rem;
		color: #666;
	}
	.search{
		position: relative;
	}
	.search span{
		width: 2rem;
		height: 2rem;
		background: url(../../../assets/images/search.png) no-repeat;
		position: absolute;
		top: 0.3rem;
		left: 0;
	}
	.search ul{
		width: 24.4rem;
		position: absolute;
		top: 3rem;
		left: 0;
		z-index: 99;
	}
	.search ul li{
		width: 24rem;
		height: 2.8rem;
		line-height: 2.8rem;
		color: #666666;
		background-color: #fff;
		padding: 0 0.6rem;
		border-top: 1px solid #EAEAEA;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
	}
	.search ul li:hover{
		color: #10D07A;
	}
</style>

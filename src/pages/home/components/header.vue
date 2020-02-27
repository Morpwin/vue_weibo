<template>
	<div class="header">
		<div class="contain">
			<ul ref="ul" class="ul">
				<li class="now"><router-link tag="a" to="/">首页</router-link></li>
				<li class="mobile"><router-link tag="a" :to="{path:'/article',query:{type:'all'}}">文章</router-link></li>
				<li class="mobile_header" >
					<span @click.stop="mobile_header">分类</span>
					<ul v-show="more">
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Html'}}">Html</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Css'}}">Css</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Javascript'}}">Javascript</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Vue'}}">Vue</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Es6'}}">Es6</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'Nodejs'}}">Nodejs</router-link></li>
						<li><router-link tag="a" :to="{path:'/article',query:{type:'计算机网络'}}">计算机网络</router-link></li>
					</ul>
				</li>
				<li><router-link tag="a" to="/message">留言板</router-link></li>
			</ul>
			<div class="search">
				<span class="img-fluid"></span>
				<input type="text" v-model="keyword">
				<ul v-if="showList">
					<router-link tag="li" v-for="(item, index) in newlist" :key="index" :to="{path:'/content',query:{_id:item._id, title: item.title}}">{{item.title}}</router-link>
				</ul>
			</div>
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
			showList: false,
			more: false
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
		more: function (val) {
			if(val == true) {
				document.onclick = ""
				document.onclick =  () => {
					this.more = false
				}
			}
		}
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
		if(window.location.href == "http://www.ziranfans.com/") {
			ul.children[0].className = "now"
			ul.children[1].className = "mobile"
			ul.children[3].className = ""
		}
		else if(window.location.href.includes("http://www.ziranfans.com/article") || window.location.href.includes("http://www.ziranfans.com/content") ) {
			ul.children[3].className = ""
			ul.children[1].className = "now mobile"
			ul.children[0].className = ""
		}
		else if(window.location.href.includes("http://www.ziranfans.com/message")){
			ul.children[3].className = "now"
			ul.children[1].className = "mobile"
			ul.children[0].className = ""
		}
	},
	methods: {
		mobile_header() {
			this.more = true
		}
	}
}
</script>

<style scoped>
	.mobile_header {
		display: none;
	}
	.header .ul .mobile_header {
		
	}
	.header .ul .mobile_header span {
		color: #000000;
		font-size: 14px;
		cursor: pointer;
	}
	.header .ul .mobile_header ul{
		background-color: rgba(255,255,255,.9);
	}
	.header .ul .mobile_header ul li{
		border-bottom: 5px solid rgba(255, 255, 255, .12);
		color: #666;
	}
	.header .ul .mobile_header ul li a {
		font-size: 12px;
	}
	.header{
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(255,255,255,0.52);
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, .12);
	}
	.contain {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.header .ul{
		display: flex;
		height: 60px;
		justify-content: flex-end;
		align-items: center;
		margin-right: 100px;
	}
	.header .ul li{
		width: 100px;
		height: 55px;
		line-height: 55px;
		text-align: center;
		border-bottom: 5px solid rgba(255, 255, 255, .12);
	}
	.header .ul li.now{
		border-bottom: 5px solid #10D07A;
	}
	.header .ul li a{
		color: #000;
		text-decoration: none;
		font-size: 14px;
	}
	.header input{
		width: 200px;
		height: 26px;
		border: 1px solid #ccc;
		margin-right: 10px;
		padding: 0 10px 0 22px;
		color: #666;
		font-size: 12px;
	}
	.search{
		position: relative;
	}
	.search span{
		width: 20px;
		height: 20px;
		background: url(../../../assets/images/search.png) no-repeat;
		background-size: cover;
		position: absolute;
		top: 3px;
		left: 0;
	}
	.search ul{
		width: 244px;
		position: absolute;
		top: 30px;
		left: 0;
		z-index: 9999;
	}
	.search ul li{
		width: 240px;
		height: 28px;
		line-height: 28px;
		color: #666666;
		background-color: #fff;
		padding: 0 6px;
		border-top: 1px solid #EAEAEA;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		font-size: 14px;
	}
	.search ul li:hover{
		color: #10D07A;
	}
</style>

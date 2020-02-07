<template>
	<div class="me">
		<div class="about_me">
			<div class="title_me">关于作者</div>
			<h1>Morpwin</h1>
			<h2>一个前端小白</h2>
			<h3>巨蟹座</h3>
			<h4>初学HTML、CSS、JS，有了解Vue</h4>
		</div>
		<div class="contact">
			<div class="title_contact">联系我</div>
			<ul>
				<li @click="qq"></li>
				<li @click="wx"></li>
				<li @click="git"></li>
			</ul>
			<div class="big-img" v-show="imgFlag"  @click="hide">
				<img :src=img alt="">
				<span>X</span>
			</div>
		</div>
		<div class="type">
			<div class="title_type">相关分类</div>
			<ul>
				<!-- <li><a href="/article/Html">Html</a></li>
				<li><a href="/article/Css">Css</a></li>
				<li><a href="/article/Javascript">Javascript</a></li>
				<li><a href="/article/Vue">Vue</a></li>
				<li><a href="/article/Es6">Es6</a></li>
				<li><a href="/article/Nodejs">Nodejs</a></li>
				<li><a href="/article/计算机网络">计算机网络</a></li> -->
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Html'}}">Html</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Css'}}">Css</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Javascript'}}">Javascript</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Vue'}}">Vue</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Es6'}}">Es6</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'Nodejs'}}">Nodejs</router-link></li>
				<li><router-link tag="a" :to="{path:'/article',query:{type:'计算机网络'}}">计算机网络</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: "HomeMe",
	methods: {
		qq() {
			this.img = require("../../../assets/images/qq.png")
			this.imgFlag = true
		},
		wx() {
			this.img = require("../../../assets/images/wx.jpg")
			this.imgFlag = true
		},
		git() {
			this.img = require("../../../assets/images/git.png")
			this.imgFlag = true
		},
		hide(event) {
			let close = document.querySelector(".big-img").children[1]
			if(event.target == close) {
				this.imgFlag = false
			}
		}
	},
	data() {
		return {
			img: "",
			imgFlag: false
		}
	}
}
</script>

<style scoped="scoped">
	.me{
		width: 30%;
		margin-left: 4rem;
	}
	.about_me,.type,.contact{
		border: 1px solid #eaeaea;
		position: relative;
		padding: 4rem 2rem 4rem 2rem;
		text-align: center;
		font-size: 1.4rem;
		line-height: 3rem;
		margin-top: 4rem;
	}
	.title_me,.title_type,.title_contact{
		position: absolute;
		width: 18rem;
		height: 4rem;
		background-color: #fff;
		text-align: center;
		line-height: 4rem;
		left: 50%;
		margin-left: -9rem;
		top: -2rem;
		font-size: 2rem;
		font-weight: 400;
	}
	.about_me h1{
		color: #10D07A;
	}
	.type ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.type ul li{
		
		background-color: #f3f3f3;	
		text-align: center;
		margin: .5rem;
		cursor: pointer;
	}
	/* a的样式 */
	.type ul li a{
		display: block;
		height: 1rem;
		padding: 1rem;
		line-height: 1rem;
		color: #666;
	}
	.type ul li a:hover{
		color: #fff;
	}
	.type ul li:hover{
		color: #fff;
		background-color: #10D07A;
	}
	.contact ul{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.contact ul li{
		width: 4rem;
		height: 4rem;
		margin: .5rem;
		border: .1rem solid #EAEAEA;
		cursor: pointer;
	}
	.contact ul li:first-child{
		background: url(../../../assets/images/aui-icon-qq.png) no-repeat center;
	}
	.contact ul li:first-child:hover{
		background: url(../../../assets/images/aui-icon-qq-hover.png) no-repeat center;
		background-color: #10D07A;
	}
	.contact ul li:nth-child(2){
		background: url(../../../assets/images/weixin.png) no-repeat center;
	}
	.contact ul li:nth-child(2):hover{
		background: url(../../../assets/images/weixin-hover.png) no-repeat center;
		background-color: #10D07A;
	}
	.contact ul li:nth-child(3){
		background: url(../../../assets/images/github.png) no-repeat center;
	}
	.contact ul li:nth-child(3):hover{
		background: url(../../../assets/images/github-hover.png) no-repeat center;
		background-color: #10D07A;
	}
	.contact .big-img{
		width: 16rem;
		height: 16rem;
		text-align: center;
		line-height: 16rem;
		position: absolute;
		top: -1.6rem;
		left: 10rem;
		border: 1px solid #EAEAEA;
		z-index: 99;
		background-color: #fff;
	}
	.contact .big-img img{
		width: 10rem;
		height: 10rem;
	}
	.contact .big-img span{
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		padding: .5rem;
		color: #EAEAEA;
	}
	.contact .big-img span:hover{
		cursor: pointer;
		background-color: #10D07A;
		color: #fff;
	}
</style>

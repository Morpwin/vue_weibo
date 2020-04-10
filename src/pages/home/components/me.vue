<template>
	<div class="me" >
		<div class="about_me fadeInRight">
			<div class="title_me">关于作者</div>
			
			<!-- <h2>一个前端小白</h2>
			<h3>巨蟹座</h3>
			<h4>初学HTML、CSS、JS，有了解Vue</h4> -->
			<a href="../../../../jianli/index.html" target="_blank"><img src="../../../assets/images/me.jpg" alt="博客头像"></a>
			<h1>孜然粉</h1>
		</div>
		<div class="contact fadeInRight">
			<div class="title_contact">联系我</div>
			<ul>
				<li @click="qq"></li>
				<li @click="wx"></li>
				<li @click="git"></li>
			</ul>
			<div class="big-img" v-show="imgFlag"  @click="hide">
				<img :src=img alt="" class="img-fluid">
				<span>X</span>
			</div>
		</div>
		<div class="type fadeInRight">
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
			imgFlag: false,
		}
	},
	mounted() {

	}
}
</script>

<style scoped="scoped">
	.me{
		margin-left: 20px;
		margin-right: 20px;
		width: 340px;
	}
	.about_me,.type,.contact{
		border: 1px solid #eaeaea;
		position: relative;
		padding: 40px 20px 40px 20px;
		text-align: center;
		font-size: 14px;
		line-height: 30px;
		margin-top: 40px;
	}
	.title_me,.title_type,.title_contact{
		position: absolute;
		width: 180px;
		height: 40px;
		background-color: #fff;
		text-align: center;
		line-height: 40px;
		left: 50%;
		margin-left: -90px;
		top: -20px;
		font-size: 20px;
		font-weight: 400;
	}
	.about_me h1{
		color: #10D07A;
		cursor: pointer;
	}
	.about_me h1,h2,h3,h4{
		line-height: 30px;
		font-size: 14px;
	}
	.about_me img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		cursor: pointer;
	}
	.about_me img:hover{
		transform: rotate(360deg);
		transition: all .5s linear;
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
		margin: 5px;
		cursor: pointer;
		font-size: 12px;
	}
	/* a的样式 */
	.type ul li a{
		display: block;
		height: 10px;
		padding: 10px;
		line-height: 10px;
		color: #666;
		font-size: 12px;
	}
	.type ul li a:hover{
		color: #fff;
		text-decoration: none;
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
		width: 40px;
		height: 40px;
		margin: 5px;
		border: 1px solid #EAEAEA;
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
	/* 适配手机端,避免图片失真 */
	@media only screen and (max-width: 640px) {
    .contact ul li:first-child{
			background: url(../../../assets/images/aui-icon-qq-2x.png) no-repeat center;
			background-size: 50% 50%;
    }
    .contact ul li:first-child:hover{
			background: url(../../../assets/images/aui-icon-qq-hover-2x.png) no-repeat center;
			background-color: #10D07A;
			background-size: 50% 50%;
    }
    .contact ul li:nth-child(2){
			background: url(../../../assets/images/weixin-2x.png) no-repeat center;
			background-size: 50% 50%;
    }
    .contact ul li:nth-child(2):hover{
			background: url(../../../assets/images/weixin-hover-2x.png) no-repeat center;
			background-color: #10D07A;
			background-size: 50% 50%;
    }
    .contact ul li:nth-child(3){
			background: url(../../../assets/images/github-2x.png) no-repeat center;
			background-size: 50% 50%;
    }
    .contact ul li:nth-child(3):hover{
			background: url(../../../assets/images/github-hover-2x.png) no-repeat center;
			background-color: #10D07A;
			background-size: 50% 50%;
    }
}
	.contact .big-img{
		width: 100%;
		height: 160px;
		text-align: center;
		line-height: 160px;
		position: absolute;
		top: 0;
		left: 0;
		border: 1px solid #EAEAEA;
		z-index: 99;
		background-color: #fff;
	}
	.contact .big-img img{
		width: 100px;
		height: 100px;
	}
	.contact .big-img span{
		position: absolute;
		top: 0;
		right: 0;
		display: block;
		width: 10px;
		height: 10px;
		line-height: 10px;
		padding: 5px;
		color: #EAEAEA;
	}
	.contact .big-img span:hover{
		cursor: pointer;
		background-color: #10D07A;
		color: #fff;
	}
</style>

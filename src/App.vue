<template>
	<div id="app">
		<router-view v-if="isShow"></router-view>
	</div>
</template>
<script>
import scrollReveal from 'scrollreveal';
export default {
	name: 'App',
	data() {
		return {
			transitionName: '',
			scrollReveal: scrollReveal(),
			//控制变量
			isShow: true
		}
	},
	provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
		return {
			reload: this.reload                                              
		}
	},
	created() {
		if(document.addEventListener){
			document.addEventListener('DOMMouseScroll',this.mousewheelFunc,false);
		}
		window.onmousewheel = document.onmousewheel = this.mousewheelFunc
		window.onscroll = this.scrollFunc
	},
	mounted() {
		this.$nextTick(() => {
			this.scrollReveal.reveal('.fadeInRight', {
				// 动画的时长
				duration: 1500,
				// 延迟时间
				delay: 0,
				// 动画开始的位置，'bottom', 'left', 'top', 'right'
				origin: 'right',
				// 回滚的时候是否再次触发动画
				reset: true,
				// 在移动端是否使用动画
				mobile: false,
				// 滚动的距离，单位可以用%，rem等
				distance: '100px',
				// 其他可用的动画效果
				easing: 'linear',
			})
			this.scrollReveal.reveal('.fadeInLeft', {
				// 动画的时长
				duration: 1500,
				// 延迟时间
				delay: 0,
				// 动画开始的位置，'bottom', 'left', 'top', 'right'
				origin: 'left',
				// 回滚的时候是否再次触发动画
				reset: true,
				// 在移动端是否使用动画
				mobile: false,
				// 滚动的距离，单位可以用%，rem等
				distance: '100px',
				// 其他可用的动画效果
				easing: 'linear',
			})
			this.scrollReveal.reveal('.fadeInTop', {
				// 动画的时长
				duration: 1500,
				// 延迟时间
				delay: 0,
				// 动画开始的位置，'bottom', 'left', 'top', 'right'
				origin: 'left',
				// 回滚的时候是否再次触发动画
				reset: true,
				// 在移动端是否使用动画
				mobile: false,
				// 滚动的距离，单位可以用%，rem等
				distance: '0px',
				// 其他可用的动画效果
				easing: 'linear',
				opacity: 0
			})
		})
	},
	methods: {
		mousewheelFunc(e) {
			e = e || window.event;  
			if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
				if (e.wheelDelta > 0) { //当滑轮向上滚动时  
					this.$store.dispatch("changeHeaderFlagFun",true)
				}  
				if (e.wheelDelta < 0) { //当滑轮向下滚动时  
					this.$store.dispatch("changeHeaderFlagFun",false)
				}  
			} 
			else if (e.detail) {    //Firefox滑轮事件  
			window.console.log(e.detail)
				if (e.detail < 0) { //当滑轮向上滚动时  
					this.$store.dispatch("changeHeaderFlagFun",true)
				}  
				if (e.detail > 0) { //当滑轮向下滚动时  
					this.$store.dispatch("changeHeaderFlagFun",false)
				}  
			}  
		},
		scrollFunc() {
			let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
			if(scrollTop < 60) {
				this.$store.dispatch("changeHeaderFlagFun",true)
			}
		},
		reload () {
			this.isShow = false;            //先关闭，
			this.$nextTick(function () {
				this.isShow = true;         //再打开
			}) 
		}
	}
}
</script>
<style>
	.head-enter, .head-leave-to {
		transform: translateY(-60px);
	}
	.head-enter-active, .head-leave-active {
		transition: all 0.8s linear;
	}
	@media screen and (max-width: 640px) {
		#app .mobile {
			display: none;
		}
		#app .article {
			margin-top: 40px;
		}
		#app .article_box {
			visibility: visible;
		}
		#app .header {
			width: 100%;
			height: 60px;
		}
		#app .header li {

		}
		#app .contain {
			width: 100%;
		}
		#app .main {
			margin-top: 60px;
		}
		#app .main h2 {
			font-size: 12px;
		}
		#app .mobile_header {
			display: block;
		}
		#app .message_box2 {
			width: 100%;
			padding: 10px;
		}
		#app .get .get_content , #app .get .get_name , #app .get .get_time{
			font-size: 12px;
		}
	}
</style>

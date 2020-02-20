<template>
	<div class="article">
			<div class="border-bottom article_box Left" v-for="item in dataShow" :key="item._id" id="article_box">	
				<router-link class="h1" :to="'/content/' + item._id" tag="h1">{{item.title}}</router-link>
				<router-link class="p" :to="'/content/' + item._id" tag="p" v-html="item.tip">{{item.tip}}</router-link>
				<router-link tag="div" class="type" :to="{path:'/article',query:{type:item.type}}">{{item.type}}</router-link>
				<time>{{item.time}}</time>
			</div>
	</div>
</template>

<script>
import scrollReveal from 'scrollreveal'
export default{
	name: "HomeArticle",
	props:['dataShow'],
	data() {
		return {
			scrollReveal: scrollReveal()
		}
	},
	watch: {
		dataShow: function () {
			this.$nextTick(function(){
				this.scrollReveal.reveal('.Left', {
					// 动画的时长
					duration: 800,
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
					beforeReveal: () => {
					
					},
					afterReveal: () => {

					},
					beforeReset: () => {

						
					},
					afterReset: () => {

						
					}
				})
			})
		}
	},
	mounted() {
		
	},
	methods: {

	}
}
</script>

<style scoped="scoped">
	.article-enter, .article-leave {
		transform: translateY(200px);
	}
	.article-enter-active, .head-leave-active {
		transition: all 0.8s linear;
	}
	.article{
		flex: 1;
		width: 70%;
	}
	.article_box{
		padding: 20px 20px 20px 20px;
		display: flex;
		flex-wrap: wrap;
		visibility: hidden;
	}
	.article_box:hover{
		box-shadow: 4px 4px 4px #EAEAEA;
	}
	.h1{
		font-size: 24px;
		font-weight: 800;
		line-height: 60px;
	}
	.type:hover,.h1:hover,.p:hover{
		color: #10D07A;
		cursor: pointer;
	}
	.type,time{
		width: 50%;
		color: #25a4bb;
		font-size: 12px;
		line-height: 30px;
		
	}
	time{
		color: #ccc;
		text-align: right;
	}
	.h1,.p{
		width: 100%;
	}
	.p{
		font-size: 16px;
		line-height: 30px;
		color: #666;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.h1{
		
	}
</style>

<template>
	<div class="main fadeInLeft">
		<div class="title"><h1>{{article.title}}</h1></div>
		<div class="content" v-html="article.content" id="content"></div>
	</div>
</template>

<script>
import scrollReveal from 'scrollreveal'
export default{
	name: "ContentMain",
	props:{
		article: Object
	},
	data() {
		return {
			scrollReveal: scrollReveal()
		}
	},
	mounted() {
		this.scrollReveal.reveal(".fadeInLeft", {
			// 动画的时长
			duration: 800,
			// 延迟时间
			delay: 0,
			// 动画开始的位置，'bottom', 'left', 'top', 'right'
			origin: 'left',
			// 回滚的时候是否再次触发动画
			reset: false,
			// 在移动端是否使用动画
			mobile: false,
			// 滚动的距离，单位可以用%，rem等
			distance: '200px',
			// 其他可用的动画效果
			easing: 'linear'
		})
	}
}
</script>

<style>
	.main {
		flex: 1;
		margin-top: 30px;
		width: 70%;
		padding-left: 20px;
	}
	/* table 样式 */
	.main table {
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}
	.main table td,
	.main table th {
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		padding: 3px 5px;
	}
	.main table th {
		border-bottom: 2px solid #ccc;
		text-align: center;
	}

	/* blockquote 样式 */
	.main blockquote {
		display: block;
		border-left: 8px solid #d0e5f2;
		padding: 5px 10px;
		margin: 10px 0;
		line-height: 1.4;
		font-size: 100%;
		background-color: #f1f1f1;
	}

	/* code 样式 */
	.main code {
		display: inline-block;
		*display: inline;
		*zoom: 1;
		background-color: #f1f1f1;
		border-radius: 3px;
		padding: 3px 5px;
		margin: 20px 3px;
		color: #666;
		font-size: 14px;
	}
	.main pre code {
		display: block;
	}

	/* ul ol 样式 */
	.main ul, ol {
		margin: 10px 0 10px 20px;
	}
	.main h1{
		font-size: 24px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h2{
		font-size: 22px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h3{
		font-size: 20px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h4{
		font-size: 18px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h5{
		font-size: 16px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h6{
		font-size: 14px;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main p{
		font-size: 14px;
		line-height: 30px;
		text-indent: 20px;
	}
	.main span{
		font-size: 14px;
		color: #ccc;
	}
	.main img{
		width: auto; 
		max-width: 100%;
	}
</style>

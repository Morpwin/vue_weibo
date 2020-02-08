<template>
	<div class="main">
		<div class="title"><h3>{{article.title}}</h3></div>
		<div class="content" v-html="article.content" id="content">
		</div>
	</div>
	<!-- <div>
		<p></p><h3 id="静态布局">静态布局</h3><p>最外层容器固定大小，超出部分用滚动条实现，移动端不兼容</p><p>一般PC会设置最小宽度，低于最小宽度出现滚动条，移动端设置最大宽度，超过则居中显示</p><h3 id="流式布局"><a href="#流式布局"></a>流式布局</h3><p>常用模板：</p><p>左侧固定 右侧自适应</p><p>左右固定 中间自适应</p><p>缺点：屏幕尺度跨度过大时，页面不能正常显示</p><h3 id="弹性布局"><a href="#弹性布局"></a>弹性布局</h3><p>CSS3引入的强大布局，但是浏览器兼容不好，移动端浏览器对flex支持也不理想</p><h3 id="响应式布局"><a href="#响应式布局"></a>响应式布局</h3><p>自适应布局和流式布局的综合，利用媒介查询检测屏幕尺寸，设置不同样式</p>
	</div> -->
</template>

<script>
export default{
	name: "ContentMain",
	props:{
		article: Object
	},
	data() {
		return {
			
		}
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

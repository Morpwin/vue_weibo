<template>
	<div class="main fadeInLeft">
		<div class="title"><h1>{{article.title}}</h1></div>
		<div class="content" v-html="article.content" id="content"></div>
	</div>
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
	},
	mounted() {

	},
	
}

</script>

<style>
	.main {
		margin-top: 30px;
		flex: 1;
		padding-left: 20px;
		width: 0;
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
		font-size: 24px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h2{
		font-size: 22px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h3{
		font-size: 20px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h4{
		font-size: 18px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h5{
		font-size: 16px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main h6{
		font-size: 14px !important;
		font-weight: 800;
		line-height: 60px;
		color: #10D07A;
	}
	.main p , .main li{
		font-size: 14px;
		line-height: 30px;
		text-indent: 2em
	}
	.main li {
		list-style: disc outside none;
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

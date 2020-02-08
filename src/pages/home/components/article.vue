<template>
	<div class="article">
		<div class="border-bottom article_box" v-for="(item, index) in dataShow" :key="index">
			<router-link class="h1" :to="'/content/' + item._id" tag="h1">{{item.title}}</router-link>
			<router-link class="p" :to="'/content/' + item._id" tag="p" v-html="item.tip">{{item.tip}}</router-link>
			<router-link tag="div" class="type" :to="'/article/' + item.type">{{item.type}}</router-link>
			<time>{{item.time}}</time>
		</div>
	</div>
</template>

<script>
export default{
	name: "HomeArticle",
	props:['dataShow']
}
</script>

<style scoped="scoped">
	.article{
		flex: 1;
		width: 70%;
	}
	.article_box{
		padding: 20px 20px 20px 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.h1{
		font-size: 26px;
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
		font-size: 14px;
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

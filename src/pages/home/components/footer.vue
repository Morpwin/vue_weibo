<template>
	<div class="footer">
		联系我 
		<div class="qq">QQ:563604332@qq.com</div>
		<div class="wx">WX:Morpwin</div>
	</div>
</template>

<script>
export default {
	name: "HomeFooter"
}
</script>

<style>
	.footer{
		width: 100%;
		background-color: #eaeaea;
		height: 50px;
		position: absolute;
		left: 0;
		text-align: center;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 20px;
		font-size: 12px;
		
	}
	.qq,.wx{
		font-size: 12px;
		color: #666;
		width: 100%;
	}
</style>

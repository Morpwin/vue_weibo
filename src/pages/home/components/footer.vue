<template>
	<div class="footer">
		<div class="time">{{time}}</div>
		<div class="number">粤ICP备20009928号</div>
	</div>
</template>

<script>
export default {
	name: "HomeFooter",
	data() {
		return {
			time: ""
		}
	},
	mounted() {
		let oldTime = new Date('2020/02/21 00:00:00')
		setInterval(() => {
			let newTime = new Date()
			let longTime = newTime - oldTime
			let day = parseInt(longTime / 1000 / 60 / 60 / 24 , 10)
			let hour = parseInt(longTime / 1000 / 60 / 60 % 24 , 10)
			let min = parseInt(longTime / 1000 / 60 % 60 , 10)
			let sec = parseInt(longTime / 1000 % 60, 10)
			this.time = `博客已经运行了${day}天${hour}小时${min}分${sec}秒啦~`
		},1000)
	}
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
	.qq,.number{
		font-size: 12px;
		color: #666;
		width: 100%;
	}
</style>

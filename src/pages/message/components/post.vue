<template>
	<div class="post">
		<label for="text">
			昵称
		</label>
		<input type="text" class="name" id="text">
		<textarea class="text">
			
		</textarea>
		<button @click="post_btn">提交</button>
	</div>
</template>

<script>
import axios from 'axios'
import timeTool from '@/assets/js/timeTool.js'
export default {
	name: 'MessagePost',
	data() {
		return {
			
		}
	},
	inject: ['reload'],
	methods: {
		post_btn() {
			let name = document.querySelector(".name").value
			let content = document.querySelector(".text").value
			let time = timeTool()
			if(name != "" && content != "") {
				axios.post("http://121.40.244.57:3000/article/setPost", {name: name, content: content, time: time}).then((res) => {
					if(res.data.code == 1) {
						alert("提交成功")
						name = ""
						content = ""
						this.reload()
					}
				})
			}
			else {
				alert("昵称或内容不能为空！")
			}
			
		}
	}
}
</script>

<style scoped="scoped">
	.post {
		width: 100%;
		background-color: #f5f5dc;
		padding: 20px 0 20px 0;
		margin-top: 40px;
	}
	.post label {
		font-size: 14px;
		margin: 0 10px 0 20px;
	}
	.post .name {
		width: 30%;
		height: 30px;
		padding: 0 5px 0 5px;
		font-size: 14px;
		background-color: rgba(255,255,255,0.5);
	}
	.post .text {
		width: 90%;
		height: 200px;
		border: 1px solid #eaeaea;
		background-color: rgba(255,255,255,0.5);
		padding: 20px;
		font-size: 14px;
		margin: 20px 0 0 20px;
	}
	.post button {
		width: 100px;
		height: 30px;
		display: block;
		margin: 20px 0 0 20px;
		background-color: rgba(255,255,255,0.5);
		font-size: 14px;
		border-radius: 4px;
		outline: none;
	}
</style>

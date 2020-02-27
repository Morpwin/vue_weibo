<template>
	<div class="get">
		<div class="get_box">
			<div class="get_message fadeInTop" v-for="item in data" :key="item._id" ref="get_message">
				<div class="get_content">{{item.content}}</div>
				<div class="get_name">
					{{item.name}}
				</div>
				<div class="get_time">{{item.time}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import scrollReveal from 'scrollreveal'
export default {
	name: 'MessageGet',
	data() {
		return {
			//页面大小
			pageWidth: "",
			//每一行可以放置的数量
			col: "",
			//计算高度
			maxHeight: "",
			//留言数组
			data: [],
			scrollReveal: scrollReveal()
		}
	},
	watch: {
		data: function () {
			this.$nextTick(() => {
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
		}
	},
	created() {
	
	},
	mounted() {
		axios.get("http://121.40.244.57:3000/article/getPost").then((res) => {
			window.console.log(res.data.data)
			if(res.data.code == 1) {
				this.data = res.data.data
				this.$nextTick(() => {
					let box = document.getElementsByClassName("get_message")
					let itemWidth = 240
					let gap = 30
					this.pageWidth = document.querySelector(".get_box").offsetWidth
					this.col = Math.floor(this.pageWidth / 240)
					let arrHeight = []
					for(let i = 0; i < box.length; i++) {
						if(i < this.col) {
							let left = i * (itemWidth + gap)
							box[i].style.left = left + "px"
							arrHeight[i] = box[i].offsetHeight
							this.getMaxHeight(arrHeight)		
							document.querySelector(".get_box").style.height = this.maxHeight + "px"
						}
						else {
							let minHeight = Math.min.apply(null,arrHeight)
							let minHeightIndex = this.getMinHeightIndex(arrHeight, minHeight)
							box[i].style.top = minHeight + gap + "px"
							box[i].style.left = box[minHeightIndex].style.left
							arrHeight[minHeightIndex] = arrHeight[minHeightIndex] + box[i].offsetHeight + gap
							this.getMaxHeight(arrHeight)
							document.querySelector(".get_box").style.height = this.maxHeight + "px"
						}
					}
				})
			}
		})
		
		window.onresize = () => {
			let box = document.getElementsByClassName("get_message")
			let itemWidth = 240
			let gap = 30
			this.pageWidth = document.querySelector(".get_box").offsetWidth
			this.col = Math.floor(this.pageWidth / 240)
			let arrHeight = []
			for(let i = 0; i < box.length; i++) {
				if(i < this.col) {
					let left = i * (itemWidth + gap)
					box[i].style.left = left + "px"
					box[i].style.top = "0px"
					arrHeight[i] = box[i].offsetHeight
					this.getMaxHeight(arrHeight)
					document.querySelector(".get_box").style.height = this.maxHeight + "px"
				}
				else {
					let minHeight = Math.min.apply(null,arrHeight)
					let minHeightIndex = this.getMinHeightIndex(arrHeight, minHeight)
					box[i].style.top = minHeight + gap + "px"
					box[i].style.left = box[minHeightIndex].style.left
					arrHeight[minHeightIndex] = arrHeight[minHeightIndex] + box[i].offsetHeight + gap
					this.getMaxHeight(arrHeight)
					document.querySelector(".get_box").style.height = this.maxHeight + "px"
				}
			}
		}
	},
	methods: {
		getMinHeightIndex(arr,height) {
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] == height) {
					return i
				}
			}
		},
		getMaxHeight(arr) {
			this.maxHeight = arr[0]
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] > this.maxHeight) {
					this.maxHeight = arr[i]
				}
			}
		}
	}
}
</script>

<style scoped="scoped">
	.get {
		width: 100%;
		margin-top: 40px;
	}
	.get_box {
		position: relative;
	}
	.get .get_message {
		width: 220px;
		display: flex;
		background-color: #f5f5dc;
		flex-wrap: wrap;
		padding: 10px;
		font-size: 12px;
		align-items: flex-start;
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 8px;
		box-shadow: 4px 4px 4px #EAEAEA;
	}
	.get .get_content{
		width: 100%;
		letter-spacing: 4px;
		line-height: 20px;
	}
	.get .get_name {
		width: 100%;
		margin-top: 40px;
	}
	.get .get_time {
		width: 100%;
		text-align: right;
	}
</style>

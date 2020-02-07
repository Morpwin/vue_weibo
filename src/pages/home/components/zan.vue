<template>
	<div class="zan">
		<div class="icon" @click="clickZan"><img :src="zanImg" alt=""></div>
		<div class="num" @click="clickZan" ref="num">{{this.zan}}</div>
		<transition name="fade" @after-leave="afterLeave"><div class="text" v-show="flag">您已经点过赞了~</div></transition>
		<transition name="num"><div class="add" v-show="add_num">+1</div></transition>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: "HomeZan",
	props: {
		zan: Number
	},
	data() {
		return {
			flag: false,
			zanImg: require("../../../assets/images/zan.png"),
			show: false,
			add_num: false,
			zanFlag: ""
		}
	},
	watch: {
		zanFlag() {
			let num = this.$refs.num
			if(this.zanFlag) {
				num.style.backgroundColor = "#10D07A"
				this.zanImg = require("../../../assets/images/zan2.png")
			}
			else {
				this.zanImg = require("../../../assets/images/zan.png")
				num.style.backgroundColor = "#EAEAEA"
			}
		}
	},
	mounted() {
		let num = this.$refs.num
		let ip = sessionStorage.getItem('ip')
		axios.get('http://localhost:3000/people/getPeople',{params: {ip: ip}}).then((res) => {
			if(res.data.code == 1) {
				window.console.log(res.data.data)
				this.zanFlag = res.data.data.zanFlag
				if(this.zanFlag) {
					num.style.backgroundColor = "#10D07A"
					this.zanImg = require("../../../assets/images/zan2.png")
				}
				else {
					this.zanImg = require("../../../assets/images/zan.png")
					num.style.backgroundColor = "#EAEAEA"
				}
			}
		})
	},
	methods: {
		clickZan() {
			this.$emit("listenClickZan")
			if(this.zanFlag && !this.show ) {
				this.flag = true
				this.show = true
				setTimeout(() => {
					this.flag = false
				},3000)
			}
			if(!this.zanFlag) {
				this.add_num = true
				this.zanFlag = true
				setTimeout(() => {
					this.add_num = false
				},1500)
			}
		},
		//点赞标语回调函数
		afterLeave() {
			this.show = false
		},
		//+1回调函数
	}
}
</script>

<style>
	.zan{
		position: fixed;
		bottom: 10rem;
		right: 4.8rem;
		z-index: 9999;
	}
	.zan .icon{
		width: 6.4rem;
		height: 6.4rem;
		cursor: pointer;
	}
	.zan .num{
		width: 5.8rem;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		background-color: #EAEAEA;
		border-radius: .6rem;
		color: #fff;
		margin-top: 1rem;
		cursor: pointer;
	}
	.zan .text{
		position: absolute;
		bottom: -3rem;
		margin-left: -5.5rem;
		left: 50%;
		width: 11rem;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0
	}
	.fade-leave, .fade-enter-to {
		opacity: 1
	}
	.fade-enter-active, .fade-leave-active {
		transition: all .5s ease
	}
	.num-enter{
		opacity: 0;
		transform: translateY(50px);
	}
	.num-enter-active, .num-leave-active {
		transition: all 1s ease
	}
	.num-enter-to{
		opacity: 1;
		transform: translateY(0);
	}
	.num-leave {
		opacity: 1;
	}
	.num-leave-to {
		opacity: 0;
	}
	.add {
		color: #10D07A;
		font-size: 1.6rem;
		position: absolute;
		top: -5rem;
		left: 50%;
		margin-left: -.9rem;
	}
</style>

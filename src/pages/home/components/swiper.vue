<template>
	<div class="box">
		<div class="wrapper">
			<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide>

						<img src="../../../assets/images/b1.jpg" alt="" class="img-fluid">
					</swiper-slide>
					<swiper-slide>

						<img src="../../../assets/images/b2.jpg" alt="" class="img-fluid">
					</swiper-slide>
					<swiper-slide>

						<img src="../../../assets/images/b3.jpg" alt="" class="img-fluid">
					</swiper-slide>
			</swiper>
<!-- 			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div> -->
			<div class="mask_bd" v-show="swiperFlag">
				<div class="mask">
					<h1>{{sloganData.title}}</h1>
					<p>{{sloganData.content}}</p>
					<time>{{sloganData.time}}</time>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: "HomeSwiper",
	props: {
		sloganData: Object
	},
	data() {
		let that = this
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				loop: true,
				on: {
					touchMove() {
						window.console.log(that)
						that.swiperFlag = false
					},
					slideChangeTransitionEnd() {
						that.swiperFlag = true
					}
				}
// 				navigation: {
// 					nextEl: '.swiper-button-next',
// 					prevEl: '.swiper-button-prev'
// 				}
			},
			swiperFlag: false,
		}
	}
}
</script>

<style scoped>
	.box{
		position: relative;
		margin-top: 80px;
	}
	.wrapper{
		width: 100%;
		margin: 20px auto 0 auto;
		background-color: #eee;
		box-shadow: 0 0 8px #ccc;
	}
	.wrapper img{
		
	}
	.mask{
		width: 360px;
		height: 240px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		text-align: center;
		padding: 0 100px 0 100px;
	}
	.mask_bd{
		border: 3px solid #fff;
		padding: 5px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -128px 0 0 -288px;
		z-index: 9998;
	}
	.mask h1{
		width: 100%;
		font-size: 26px;
		line-height: 60px;
	}
	.mask p{
		width: 100%;
		font-size: 16px;
		line-height: 20px;
	}
	.mask time{
		width: 100%;
		line-height: 40px;
		font-size: 12px;
	}
	.swiper-slide{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

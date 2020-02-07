<template>
	<div class="box">
		<div class="wrapper">
			<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide>

						<img src="../../../assets/images/b1.jpg" alt="">
					</swiper-slide>
					<swiper-slide>

						<img src="../../../assets/images/b2.jpg" alt="">
					</swiper-slide>
					<swiper-slide>

						<img src="../../../assets/images/b3.jpg" alt="">
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
	}
	.wrapper{
		width: 100%;
		margin: 2rem auto 0 auto;
		background-color: #eee;
		box-shadow: 0 0 8px #ccc;
	}
	.wrapper img{
		width: 100%;
	}
	.mask{
		width: 36rem;
		height: 24rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		text-align: center;
		padding: 0 10rem 0 10rem;
	}
	.mask_bd{
		border: 3px solid #fff;
		padding: .5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -12.8rem 0 0 -28.8rem;
		z-index: 9999;
	}
	.mask h1{
		width: 100%;
		font-size: 2.6rem;
		line-height: 6rem;
	}
	.mask p{
		width: 100%;
		font-size: 1.6rem;
		line-height: 2rem;
	}
	.mask time{
		width: 100%;
		line-height: 4rem;
	}
	.swiper-slide{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

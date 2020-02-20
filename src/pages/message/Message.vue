<template>
	<div class="message">
		<transition name="head">
			<home-header  v-show="this.$store.state.headerFlag"></home-header>
		</transition>
		<div class="message_box">
			<div class="message_box2">
				<message-post></message-post>
				<message-get></message-get>
			</div>
			<home-me></home-me>
		</div>
	</div>	
</template>

<script>
import MessageGet from './components/post'
import MessagePost from './components/get'
import HomeHeader from '.././home/components/header'
import HomeMe from '.././home/components/me'
export default {
	name: 'Message',
	components: {
		MessagePost,
		HomeMe,
		HomeHeader,
		MessageGet
	}
}
</script>

<style scoped="scoped">
	.message {
		width: 100%;
		max-width: 1200px;
		min-width: 320px;
		margin: 0 auto;	
	}
	.message_box2 {
		width: 65%;
	}
	.message_box {
		display: flex;
		margin-top: 60px;
		align-items:flex-start;
	}
</style>

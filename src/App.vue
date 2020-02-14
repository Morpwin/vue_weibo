<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			transitionName: ''
		}
	}
}
</script>
<style scoped="scoped">
	@media screen and (max-width: 640px) {
		#app >>> .mobile {
			display: none;
		}
		#app >>> .article {
			margin-top: 40px;
		}
		#app >>> .header {
			width: 100%;
			height: 60px;
		}
		#app >>> .contain {
			width: 100%;
		}
	}
</style>

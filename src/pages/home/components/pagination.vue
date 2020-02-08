<template>
	<div class="pagination">
		<div class="prev" @click="prev">Prev</div>
		<div class="next" @click="next">Next</div>
	</div>
</template>

<script>
export default{
	name: "HomePagination",
	methods:{
		prev() {
			this.$emit("listenPrev",123)
		},
		next() {
			this.$emit("listenNext",123)
		}
	}
}
</script>

<style scoped="scoped">
	.pagination{
		width: 65%;
		display: flex;
		justify-content: space-between;
		padding: 20px 0 20px 20px;
	}
	.prev,.next{
		width: 80px;
		height: 30px;
		border: 1px solid #10D07A;
		font-size: 16px;
		line-height: 30px;
		text-align: center;
	}
	.prev:hover,.next:hover{
		cursor: pointer;
		background-color: #10D07A;
		color: #fff;
	}
</style>

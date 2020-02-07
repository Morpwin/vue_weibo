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
		padding: 2rem 0 2rem 2rem;
	}
	.prev,.next{
		width: 8rem;
		height: 3rem;
		border: 1px solid #10D07A;
		font-size: 1.6rem;
		line-height: 3rem;
		text-align: center;
	}
	.prev:hover,.next:hover{
		cursor: pointer;
		background-color: #10D07A;
		color: #fff;
	}
</style>

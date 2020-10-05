<template>
	<div>
		<span
			class="text-2xl font-bold text-fifth hover:text-triad cursor-pointer mr-5"
			:class="{
				['text-4xl font-bold text-triad!']: this.isCurrentPage,
			}"
			@click="updateCurrentPage"
			>{{ pageNum }}</span
		>
	</div>
</template>

<script>
export default {
	name: "TablePaginationNumber",
	props: ["pageNum"],
	computed: {
		isCurrentPage() {
			return this.$store.state.table.pageNum == this.pageNum;
		},
	},
	methods: {
		updateCurrentPage(event) {
			let start = parseInt(event.target.textContent) - 1;
			let end = start + 1;

			this.$store.dispatch("table/updateCurrentPage", {
				sliceStart: start,
				sliceEnd: end,
				pageNum: this.pageNum,
			});
		},
	},
};
</script>
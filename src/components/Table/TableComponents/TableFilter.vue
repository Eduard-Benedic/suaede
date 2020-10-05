<template>
	<div class="container mx-auto pb-12 px-4">
		<div class="max-w-4xl mx-auto">
			<input
				v-model="keyword"
				type="text"
				@keyup="filterChart"
				class="w-full py-4 px-2 text-fifth border border-gray-400 border-solid"
				placeholder="Search by any field..."
			/>
		</div>
	</div>
</template>

<script>
// import _ from "lodash";

export default {
	name: "TableFilter",
	data: function () {
		return {
			keyword: "",
		};
	},
	methods: {
		// filterChart: _.throttle(function () {
		// 	if (this.keyword.length > 0) {
		// 		this.$store.dispatch("table/updateFilterKeyword", {
		// 			keyword: this.keyword,
		// 			stopFiltering: false,
		// 		});
		// 	} else {
		// 		this.$store.dispatch("table/stopFiltering", {
		// 			stopFiltering: true,
		// 		});
		// 	}
		// }, 600),
		filterChart: function () {
			if (this.keyword.length > 0) {
				this.$store.dispatch("table/updateFilterKeyword", {
					keyword: this.keyword,
					stopFiltering: false,
				});
			} else {
				this.$store.dispatch("table/stopFiltering", {
					stopFiltering: true,
				});
			}
		},
	},
};
</script>
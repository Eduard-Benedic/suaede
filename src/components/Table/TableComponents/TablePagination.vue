<template>
	<div v-if="getIsFiltering" class="flex justify-center pb-20 h-20">
		<table-pagination-number
			v-for="index in getPaginationLength"
			:key="index"
			:pageNum="index"
		>
		</table-pagination-number>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import TablePaginationNumber from "./TablePaginationNumber";
export default {
	name: "TablePagination",
	computed: {
		...mapGetters("table", {
			getPaginationLength: "getPaginationLength",
			// If it is filtering hide the pagination
			getIsFiltering: "getIsFiltering",
		}),
	},
	components: {
		TablePaginationNumber,
	},
};
</script>


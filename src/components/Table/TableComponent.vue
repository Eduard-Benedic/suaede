<template>
	<div>
		<UserTable
			v-if="getIsFiltering"
			v-bind:listToRender="this.$store.state.table.currentCardList"
		/>
		<UserTable v-else v-bind:listToRender="getFullSearch" />
	</div>
</template>

<script>
import UserTable from "./TableComponents/UserTable";
import { mapGetters } from "vuex";

export default {
	name: "TableComponent",
	computed: {
		...mapGetters("table", {
			getFullSearch: "getFullSearch",
			getIsFiltering: "getIsFiltering",
			// filteredByKeyword: "filteredByKeyword",
			// getChunkedData: "getChunkedData",
		}),
	},
	components: {
		UserTable,
	},
	created() {
		this.$store.dispatch("table/setCurrentPage", {
			sliceStart: 0,
			sliceEnd: 1,
		});
	},
};
</script>

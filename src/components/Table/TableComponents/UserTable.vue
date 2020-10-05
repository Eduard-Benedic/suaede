<template>
	<div>
		<table-filter></table-filter>
		<table-list v-bind:rowsToRender="this.listToRender"></table-list>
		<!-- <table-list v-else v-bind:listToRender="getFullSearch"></table-list> -->
		<table-pagination></table-pagination>
	</div>
</template>
<script>
import TableList from "./TableList";
import TableFilter from "./TableFilter";
import TablePagination from "./TablePagination";

export default {
	name: "UserTable",
	props: {
		listToRender: Array,
	},
	components: {
		TableList,
		TableFilter,
		TablePagination,
	},
};
</script>
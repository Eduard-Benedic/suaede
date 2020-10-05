<template>
	<div class="container px-4 mx-auto">
		<div>
			<table class="w-full">
				<thead>
					<tr
						class="grid grid-cols-1 xl:grid-cols-7 text-2xl py-4 xl:py-8 text-center gradient-fifth font-bold shadow-xl leading-tight tracking-widest"
					>
						<h3 class="xl:col-span-1 mb-4 xl:mb-0">Name</h3>
						<h3 class="xl:col-span-1 mb-4 xl:mb-0">Age</h3>
						<h3 class="xl:col-span-1 mb-4 xl:mb-0">
							Eyes Color
						</h3>
						<h3 class="xl:col-span-2 mb-4 xl:mb-0">
							Preferences
						</h3>
						<h3 class="xl:col-span-2 text-center">
							Location
						</h3>
					</tr>
				</thead>
				<tbody>
					<table-row
						v-for="item in rowsToRender"
						v-bind:key="item._id"
						v-bind:personInfo="item"
					>
					</table-row>
				</tbody>
			</table>
			<a
				@click.prevent="exportJson"
				download
				class="fixed top-0 right-0 gradient-fifth p-4 font-display font-bold text-lg cursor-pointer"
			>
				Export as json
			</a>
		</div>
	</div>
</template>

<script>
import TableRow from "./TableRow";
export default {
	name: "TableList",
	components: {
		TableRow,
	},
	props: {
		rowsToRender: Array,
	},
	methods: {
		exportJson() {
			let exportFileDefaultName = "chart.json";
			let dataUri =
				"data:application/json;charset=utf-8," +
				encodeURIComponent(
					JSON.stringify(this.$store.state.table.peopleList)
				);
			const linkElement = document.createElement("a");
			linkElement.setAttribute("href", dataUri);
			linkElement.setAttribute("download", exportFileDefaultName);
			linkElement.click();
		},
	},
};
</script>
<template>
	<tr
		class="grid gradient grid-cols-1 xl:grid-cols-7 shadow-md mb-10 pb-12 pt-2 xl:py-0 font-body bg-gray-100 text-gray-200"
	>
		<td
			class="xl:col-span-1 border-r border-fifth-opacity border-solid py-2 xl:py-10 p-4 text-center tracking-widest"
		>
			<h3>{{ personInfo.name }}</h3>
		</td>
		<td
			class="xl:col-span-1 border-r border-fifth-opacity border-solid flex items-center justify-center px-2"
		>
			<input
				class="w-full xl:w-20 pb-2 text-center border-b border-solid border-triad bg-transparent font-bold italic tracking-widest"
				type="text"
				@change="updateValue"
				data-field="age"
				v-bind:value="personInfo.age"
			/>
		</td>
		<td
			class="flex border-r border-fifth-opacity border-solid items-center justify-center px-2"
		>
			<input
				class="w-full xl:w-20 text-center pb-2 bg-transparent border-b border-solid border-triad capitalize"
				type="text"
				@change="updateValue"
				data-field="eyeColor"
				v-bind:value="personInfo.eyeColor"
			/>
		</td>
		<td
			class="xl:col-span-2 flex justify-between xl:items-center border-r border-fifth-opacity border-solid"
		>
			<div class="flex flex-col text-center items-center px-2">
				<span class="text-fifth font-display mb-4">Pet:</span>
				<input
					class="w-full pb-2 bg-transparent capitalize border-b border-solid border-triad text-center"
					type="text"
					v-bind:value="hasPet"
					@change="updateValue"
					data-field="preferences.pet"
				/>
			</div>
			<div class="flex flex-col text-center items-center px-2">
				<span class="text-fifth font-display text-center mb-4">
					Fruit:</span
				>
				<input
					class="w-full pb-2 bg-transparent capitalize text-center border-b border-solid border-triad"
					type="text"
					v-bind:value="personInfo.preferences.fruit"
					@change="updateValue"
					data-field="preferences.fruit"
				/>
			</div>
		</td>
		<td
			class="xl:col-span-2 flex flex-row justify-between xl:items-center"
		>
			<div class="flex flex-col justify-center px-2">
				<span class="text-fifth font-display text-center mb-4 pb-2"
					>Latitude:
				</span>
				<input
					class="w-full border-b border-triad border-solid bg-transparent text-center"
					type="text"
					v-bind:value="personInfo.location.latitude"
					@change="updateValue"
					data-field="location.latitude"
				/>
			</div>
			<div class="flex flex-col justify-center px-2">
				<span class="text-fifth font-display text-center mb-4">
					Longitude:</span
				>
				<input
					class="w-full pb-2 border-b border-solid border-triad bg-transparent text-center"
					type="text"
					v-bind:value="personInfo.location.longitude"
					@change="updateValue"
					data-field="location.longitude"
				/>
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	name: "UserRow",
	computed: {
		hasPet: function () {
			return this.personInfo.preferences.pet !== "none"
				? this.personInfo.preferences.pet
				: "No pet";
		},
	},
	props: {
		personInfo: Object,
	},
	methods: {
		updateValue(event) {
			let val = event.target.value;
			let field = event.target.dataset.field;
			this.$store.dispatch("table/updateValue", {
				id: this.personInfo._id,
				val,
				field,
			});
		},
	},
};
</script>
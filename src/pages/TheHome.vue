<template>
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col xl:flex-row justify-center items-center"
	>
		<div class="xl:max-w-xl mx-auto h-full">
			<h2 class="text-2xl xl:text-4xl grid grid-cols-2">
				<span class="inline-block"> Name: </span>
				<span class="text-fifth">{{ name }}</span>
			</h2>
			<h2 class="text-2xl xl:text-4xl grid grid-cols-2">
				<span> Scenario:</span>
				<span class="text-fifth">{{ scenarioNumber }}</span>
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheHome",
	data: function () {
		return {
			name: "Eduard Benedic",
			scenarioNumber: "II",
		};
	},
};
</script>

<style>
</style>
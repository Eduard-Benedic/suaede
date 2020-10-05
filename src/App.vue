<template>
	<div id="app" class="bg-custom-white">
		<header style="height: 35vh">
			<nav class="flex justify-center font-display py-16">
				<router-link
					class="p-4 gradient-fifth text-gray-700 font-bold tracking-widest mr-4"
					to="/"
					>Home</router-link
				>
				<router-link
					class="p-4 gradient-fifth text-gray-700 font-bold tracking-widest"
					to="/user"
					>Application
				</router-link>
			</nav>
		</header>
		<main class="min-h-screen">
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
		</main>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style scoped>
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
}
</style>

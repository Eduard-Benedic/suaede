<template>
	<div>
		<h1>I am the parents of all Greetings</h1>
		<p>Now I say greet to:</p>
		<Greeting />
	</div>
</template>

<script>
import Greeting from "./Greeting";
export default {
	name: "GreetingParent",
	components: {
		Greeting,
	},
};
</script>


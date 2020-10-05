<template>
	<div>
		<span v-if="isAdmin">Admin Privileges</span>
		<span v-else>Not authorized</span>
		<button>
			{{ msg }}
		</button>
		<article>{{ getNumbers }}</article>
	</div>
</template>

<script>
export default {
	name: "SubmitButton",
	props: {
		msg: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: false,
		},
		even: {
			type: Boolean,
		},
	},

	computed: {
		getNumbers() {
			const evens = [];
			const odds = [];
			for (let i = 0; i < 10; i++) {
				if (i % 2 == 0) {
					evens.push(i);
				} else {
					odds.push(i);
				}
			}
			return this.even === true ? evens.join(", ") : odds.join(", ");
		},
	},
};
</script>
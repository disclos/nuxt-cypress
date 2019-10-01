<template>
	<div class="page">
		<h1>Hello world!</h1>
		<button @click="increment">Increment</button>
		<span>{{ counter }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				counter: 0
			}
		},

		methods: {
			increment() {
				this.counter++
			},
			decrement() {
				this.counter--
			}
		}
	}
</script>

<template>
	<navbarmenu></navbarmenu>
	<routerview />
</template>

<script>
export default {
	async mounted() {
		await this.$store.dispatch('getFilms')
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

body {
	background-color: #000;
	padding: 0.5rem;
}

</style>

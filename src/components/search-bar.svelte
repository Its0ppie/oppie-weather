<script lang="ts">
	import Searcher from './searcher.svelte';

	export let result: any = null;
</script>

<header
	class="ow-header container h-75 w-75 p-5 m-5 d-flex flex-column justify-content-center rounded"
>
	<h1 class="ow-main-title pb-3">OPPIE WEATHER</h1>
	<Searcher bind:responseWeather={result} />
</header>

<style>
	.ow-header {
		background-color: var(--norway-4);
	}

	.ow-main-title {
		font-family: 'Monoton', cursive;
		color: var(--oxford-blue);
	}
</style>

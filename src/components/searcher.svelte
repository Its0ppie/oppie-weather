<script lang="ts">
	import { getWeatherFrom } from '../services/weather';

	export let responseWeather: any;
	$: search = '';

	const formSubmitted = (event: any) => {
		event.preventDefault();
		console.log('🔎', search);
		responseWeather = getWeatherFrom(search);
		console.log('🔎2', responseWeather);
	};

	$: {
		if (search === '') {
			responseWeather = null;
		}
	}
</script>

<form on:submit={formSubmitted} class="input-group my-3">
	<input type="text" class="form-control" placeholder="Buscar" bind:value={search} />
</form>
<div class="px-3 py-2 d-flex justify-content-around border border-1 border-start-0 border-end-0">
	<button type="button" class="btn btn-success" on:click={formSubmitted}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-search"
			viewBox="0 0 16 16"
		>
			<path
				d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
			/>
		</svg>
	</button>
	<button type="button" class="btn btn-danger" on:click={() => (search = '')}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-x-lg"
			viewBox="0 0 16 16"
		>
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
			/>
		</svg>
	</button>
</div>

<style>
</style>

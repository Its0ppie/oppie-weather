<script lang="ts">
	import WeatherIcon from './weather-icon.svelte';

	export let conditionIcon: string = '';
	export let temperature: number = 0;
</script>

<section class="container w-100 my-5 d-flex justify-content-center rounded">
	<div class="row w-100 h-100">
		<div class="col p-0 d-flex justify-content-center">
			<WeatherIcon iconUrl={conditionIcon} />
		</div>
		<div
			class="col display-1 w-100 d-flex align-items-center justify-content-center border border-1 border-start-0 border-end-0"
		>
			<strong class="ow-temperature-item">{temperature}°</strong>
		</div>
	</div>
</section>

<style>
	/* .ow-temperature-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;

		padding: 8px;
	}

	.ow-icon-item {
		grid-column: 1 / 2;
		grid-row: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	*/

	.ow-temperature-item {
		color: var(--norway-3);
	}
</style>

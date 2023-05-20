<script lang="ts">
	import BodyApp from '../components/app-body.svelte';
	import FooterApp from '../components/app-footer.svelte';
	import HeaderApp from '../components/app-header.svelte';
	import Loader from '../components/loader.svelte';
	import SearchBar from '../components/search-bar.svelte';
	import AlertNotification from '../components/alertNotification.svelte';
	import type { IWeatherResponse } from './main.types';

	let responseWeather: Promise<IWeatherResponse> | null = null;
</script>

<section
	class="ow-main-app container p-3 d-md-flex flex-row justify-content-center align-items-center"
>
	<SearchBar bind:result={responseWeather} />

	{#if responseWeather !== null}
		{#await responseWeather}
			<Loader />
		{:then responseWeather}
			<div
				class="ow-app-wrapper container h-5 w-100 p-3 mt-3 d-flex flex-column justify-content-center rounded"
			>
				<HeaderApp name={responseWeather?.name} localtime={responseWeather?.localtime} />

				<BodyApp
					conditionIcon={responseWeather?.conditionIcon}
					temperature={responseWeather?.temperature}
				/>

				<FooterApp
					humidity={responseWeather?.humidity}
					windSpeed={responseWeather?.windSpeed}
					feelsLike={responseWeather?.feelsLike}
				/>

				{responseWeather}
			</div>
		{:catch error}
			{#if error}
				<AlertNotification>
					Surgió un error en el proceso de búsqueda, es posible que no haya insertado una ciudad o
					población correcta. O nuestra base de dato haya sufrido un error inesperado, por favor,
					inténtelo de nuevo.
				</AlertNotification>
			{/if}
		{/await}
	{/if}
</section>

<style>
	.ow-app-wrapper {
		/* aspect-ratio: 9/16;
		width: 400px;
		max-width: 100%; */
		background-color: var(--space-cadet);
		box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.3);
		/*padding: 12px;
		border-radius: 5%; */
	}
</style>

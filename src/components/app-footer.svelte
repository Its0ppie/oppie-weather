<script lang="ts">
	export let humidity: string | number = '';
	export let windSpeed: string | number = '';
	export let feelsLike: string | number = '';
</script>

<section
	class="ow-footer-app-wrapper container w-100 px-3 mt-3 d-flex flex-column justify-content-center rounded border border-3"
>
	<div class="px-3 py-2 d-flex justify-content-between">
		<span class="fs-4 w-25 d-flex justify-content-center align-items-center">{humidity}</span>
		<strong class="d-flex align-items-center text-end">Humedad</strong>
	</div>

	<div class="px-3 py-2 d-flex justify-content-between border border-1 border-start-0 border-end-0">
		<span class="fs-4 w-25 d-flex justify-content-center align-items-center">{windSpeed}</span>
		<strong class="d-flex align-items-center text-end">Velocidad del Viento (kph)</strong>
	</div>

	<div class="px-3 py-2 d-flex justify-content-between">
		<span class="fs-4 w-25 d-flex justify-content-center align-items-center">{feelsLike}</span>
		<strong class="d-flex align-items-center text-end">Precipitación</strong>
	</div>
</section>

<style>
	.ow-footer-app-wrapper {
		color: var(--norway-3);
	}
</style>

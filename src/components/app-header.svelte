<script lang="ts">
	export let localtime: string = '';
	export let name: string = '';
	const newDay = localtime.split(' ')[0].split('-');
	const time = localtime.split(' ')[1];
</script>

<section
	class="ow-header-app container h-5 w-100 p-3 d-flex flex-column justify-content-center rounded"
>
	<div class="display-6 d-flex justify-content-center">
		{`${newDay[2]}/${newDay[1]}/${newDay[0]} - ${time}`}
	</div>
	<div class="ow-header-app-location display-1 d-flex justify-content-center">
		<strong>{name}</strong>
	</div>
</section>

<style>
	.ow-header-app {
		color: var(--verdigris);
	}

	.ow-header-app-location {
		color: var(--fluorescent-cyan);
	}
</style>

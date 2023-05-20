<script lang="ts">
	export let iconUrl: string;
</script>

<div class="ow-icon-wrapper d-flex justify-content-center rounded-circle">
	<div class="ow-image-wrapper d-flex justify-content-center align-items-center">
		<img class="ow-image mx-auto d-block" src={iconUrl} alt={'aaaa'} />
	</div>
</div>

<style>
	.ow-icon-wrapper {
		background-color: var(--yinmn-blue);
		border: 3px solid var(--verdigris);
	}

	.ow-image-wrapper {
		height: 8rem;
		width: 8rem;
	}

	.ow-image {
		height: 75px;
		width: 75px;
	}
</style>

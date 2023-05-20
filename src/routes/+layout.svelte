<script>
</script>

<div>
	<slot />
</div>

<style>
	:root {
		--border-width: 3px;

		/* Color Theme Swatches in Hex */
		--norway-1: #9298a6;
		--norway-2: #aab1bf;
		--norway-3: #d0d3d9;
		--norway-4: #556573;
		--norway-5: #283740;

		--oxford-blue: #0b132bff;
		--space-cadet: #1c2541ff;
		--yinmn-blue: #3a506bff;
		--verdigris: #5bc0beff;
		--fluorescent-cyan: #6fffe9ff;
	}

	:global(body) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		display: grid;
		place-content: center;
		min-height: 100vh;

		background-color: var(--norway-5);
	}
</style>

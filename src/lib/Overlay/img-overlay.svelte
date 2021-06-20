<script lang="ts">
</script>

<div class="overlay" on:click />

<style lang="scss">
	.overlay {
		position: fixed;
		cursor: pointer;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		transition: 400ms all ease;
		z-index: 1000;
	}

	.overlay:hover {
		background: rgba(0, 0, 0, 0.4);
	}
</style>

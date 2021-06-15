<script lang="ts">
	import Overlay from '$lib/Overlay/overlay.svelte';

	let opened: boolean = false;
	export let src: string = '';
	export let alt: string = '';
</script>

{#if opened}
	<Overlay on:click={(e) => (opened = false)} />
	<picture>
		<img {src} {alt} />
	</picture>
{/if}

<style lang="scss">
	img {
		display: block;
		width: 50%;
		height: auto;
	}
	picture {
		z-index: 1000;
	}
</style>

<script lang="ts">
	import Icon from 'svelte-awesome';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';
	import ImgOverlay from '$lib/Overlay/img-overlay.svelte';

	export let type: string = 'jpg';
	export let height: string = '10vw';
	export let src: string = '';
	export let thumb: string = '';
	export let avif: boolean = false;
	export let alt: string = '';
	let showImageModal: boolean = false;
</script>

{#if showImageModal}
	<ImgOverlay on:click={(e) => (showImageModal = false)} />

	<div class="viewer-img">
		<div class="close" on:click={(e) => (showImageModal = false)}>
			<Icon data={faTimes} scale="2" style="color: whitesmoke; cursor: pointer;" />
		</div>
		<picture>
			{#if avif}
				<source type="image/avif" srcset={`/avif/${src}.avif`} />
			{/if}
			<img src={`/${src}.${type}`} {alt} />
		</picture>
	</div>
{/if}
<div class="thumb-wrap">
	<div>
		<picture on:click={(e) => (showImageModal = true)}>
			{#if avif}
				<source type="image/avif" srcset={`/avif/${thumb}.avif`} />
			{/if}
			<img
				src={`/${thumb}.${type}`}
				alt={`${alt} thumbnail`}
				class="thumb-img"
				style={`height: ${height};`}
			/>
		</picture>
	</div>
</div>

<style lang="scss">
	.close {
		position: absolute;
		top: 1%;
		right: 1;
		@include respond-to('large') {
			top: 1%;
			right: 1%;
		}
		z-index: 2000;
	}
	.thumb-wrap {
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.thumb-img {
		width: auto;
		cursor: zoom-in;
	}
	.viewer-img {
		position: fixed;
		width: 100vw;
		height: 50vh;
		top: 0%;
		left: 50%;
		transform: translate(-50%, 20%);
		background-color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2000;

		@include respond-to('large') {
			width: 75vw;
			height: 75vh;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.viewer-img > picture > img {
		z-index: 2000;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		@include respond-to('small') {
			width: 75%;
		}
	}
</style>

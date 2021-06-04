<script>
	import { fade, fly } from 'svelte/transition';
	import {
		FRONT_END_TECHNOLOGIES,
		BACK_END_TECHNOLOGIES,
		DB_TECHNOLOGIES
	} from '$lib/technologies';
</script>

<svelte:head>
	<title>Eli Bates - Skills</title>
</svelte:head>
<section class="page" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h1>Technologies I Use</h1>
</section>

<section class="page" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h2>Front End</h2>
	<div class="wrapper">
		{#each FRONT_END_TECHNOLOGIES as card}
			<div class="card">
				<picture>
					<source type="image/avif" srcset={'/avif' + card.imageUrl + '.avif'} />
					<img src={card.imageUrl + '.png'} alt="" />
				</picture>
				<h3>{card.name}</h3>
			</div>
		{/each}
	</div>
</section>

<section class="page" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h2>Back End</h2>
	<div class="wrapper">
		{#each BACK_END_TECHNOLOGIES as card}
			<div class="card">
				<picture>
					<source type="image/avif" srcset={'/avif' + card.imageUrl + '.avif'} />
					<img src={card.imageUrl + '.png'} alt="" />
				</picture>
				<h3>{card.name}</h3>
			</div>
		{/each}
	</div>
</section>

<section class="page" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h2>Databases</h2>
	<div class="wrapper">
		{#each DB_TECHNOLOGIES as card}
			<div class="card">
				<picture>
					<source type="image/avif" srcset={'/avif' + card.imageUrl + '.avif'} />
					<img src={card.imageUrl + '.png'} alt="" />
				</picture>
				<h3>{card.name}</h3>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	h2 {
		margin-bottom: 1rem;
	}
	.wrapper {
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.card {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		flex: 20rem;
		background-color: hsl(0, 0%, 90%);
		border-radius: 1rem;
		padding: 0.5rem;
		@include respond-to('medium') {
			padding: 1rem;
		}
	}

	.card:hover {
		background-color: hsl(0, 0%, 95%);
		cursor: pointer;
	}

	.card img {
		display: block;
		height: 4rem;
	}
	.card h3 {
		margin-top: 0.5rem;
	}
</style>

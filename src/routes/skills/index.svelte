<script>
	import { fade, fly } from 'svelte/transition';
	import {
		CORE_TECHNOLOGIES,
		FRAMEWORKS,
		BACK_END_TECHNOLOGIES,
		DB_TECHNOLOGIES
	} from '$lib/technologies';
</script>

<svelte:head>
	<title>Eli Bates - Skills</title>
</svelte:head>

<section class="page">
	<h1>Technologies I use for building the web</h1>
	<h3>
		I use a variety of web development technlogies in my projects, but i'm most proficient with
		what's on this list.
	</h3>
</section>

<section class="page" in:fly={{ y: 200, duration: 1500 }} out:fade={{ duration: 0 }}>
	<h2>Core Languages</h2>
	<div class="wrapper">
		{#each CORE_TECHNOLOGIES as card}
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

<section class="page" in:fly={{ y: 200, delay: 1000, duration: 2000 }} out:fade={{ duration: 0 }}>
	<h2>Frameworks</h2>
	<div class="wrapper">
		{#each FRAMEWORKS as card}
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

<section class="page" in:fly={{ y: 200, delay: 2000, duration: 2000 }} out:fade={{ duration: 0 }}>
	<h2>Server</h2>
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

<section class="page" in:fly={{ y: 200, delay: 3000, duration: 2000 }} out:fade={{ duration: 0 }}>
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
<div class="spacer" />

<style lang="scss">
	h1 {
		text-align: center;
		font-size: 1.4rem;
		text-align: center;
		@include respond-to('small') {
			font-size: 1.8rem;
		}
	}
	h2 {
		margin-bottom: 1rem;
	}

	h3 {
		margin-top: 0.7rem;
		text-align: center;
		color: hsl(0, 0%, 30%);
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
		flex: 8rem;
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

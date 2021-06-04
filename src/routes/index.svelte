<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

{#if ready}
	<section class="page flex">
		<h2 class="typewriter">Hi my name is Eli.</h2>
	</section>
	<a href="/about">
		<section
			class="page flex between"
			in:fly={{ y: 200, duration: 2000, delay: 3000 }}
			out:fade={{ duration: 0 }}
		>
			<h2 class="learn" in:fly={{ x: -200, duration: 2000, delay: 3000 }}>Learn more about me</h2>
			<div class="icon">
				<Icon data={faArrowRight} style="color: hsl(0, 0%, 20%); cursor: pointer;" scale="2" />
			</div>
		</section>
	</a>
	<a href="/contact">
		<section
			class="page flex between"
			in:fly={{ y: 200, duration: 1000, delay: 5000 }}
			out:fade={{ duration: 0 }}
		>
			<h2 class="learn" in:fly={{ x: -200, duration: 2000, delay: 3000 }}>
				I can build you a website
			</h2>
			<div class="icon">
				<Icon data={faArrowRight} style="color: hsl(0, 0%, 20%); cursor: pointer;" scale="2" />
			</div>
		</section>
	</a>
{/if}

<style lang="scss">
	.typewriter {
		position: relative;
		font-family: monospace;
	}

	.typewriter::before,
	.typewriter::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.typewriter::before {
		background: white;
		animation: stagger 4s steps(18) forwards 1s;
	}

	.typewriter::after {
		width: 0.125em;
		background: transparent;
		animation: stagger 4s steps(18) forwards 1s, blink 600ms steps(18) 10;
	}

	@keyframes blink {
		from {
			background: black;
		}
		to {
			background: transparent;
		}
	}

	@keyframes stagger {
		to {
			left: 100%;
		}
	}

	.flex {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.between {
		justify-content: space-between;
	}
	a {
		color: blue;
	}

	.icon {
		margin-right: 30px;
		transition: transform 2s;
	}

	a:hover .icon {
		transform: translateX(30px);
	}

	a:hover > section {
		background-color: aliceblue;
	}

	h2 {
		font-size: 1.2rem;
		@include respond-to('small') {
			font-size: 1.5rem;
		}
	}
</style>

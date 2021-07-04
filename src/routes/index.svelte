<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { indexLoaded } from '$lib/store';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Index from './about/index.svelte';

	let ready: boolean = false;
	onMount(() => {
		ready = true;
		$indexLoaded = true;
	});
</script>

<svelte:head>
	<title>Eli Bates - Web Developer</title>
</svelte:head>

{#if ready}
	<section class="page">
		<div class="flex">
			<h2 class="typewriter">Hi my name is Eli!</h2>
		</div>
		<p in:fly={{ y: 200, duration: 2000, delay: 2000 }} out:fade={{ duration: 0 }}>
			I'm a Full Stack Web Developer from the U.S. living in Zagreb, Croatia.
		</p>
	</section>
	<a class="hide-desktop" href="/contact">
		<section
			class="page flex between page-end"
			in:fade={{ duration: 400, delay: 3000 }}
			out:fade={{ duration: 0 }}
		>
			<h2 class="learn" in:fade={{ duration: 400, delay: 3000 }}>Contact Me</h2>
			<div class="icon">
				<Icon data={faArrowRight} style="color: hsl(0, 0%, 20%); cursor: pointer;" scale="2" />
			</div>
		</section>
	</a>
	<h2
		class="section-block-title"
		in:fly={{ y: 200, delay: 3000, duration: 2000 }}
		out:fade={{ duration: 0 }}
	>
		Education and Work Experience
	</h2>

	<section class="page" in:fly={{ y: 200, delay: 3500, duration: 2000 }} out:fade={{ duration: 0 }}>
		<div class="section-heading">
			<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">
				<picture>
					<source type="image/avif" srcset="/tutor-logo.png" />
					<img class="section-image" src="/tutor-logo.png" alt="Tutor.com logo" />
				</picture>
			</a>
			<div class="section-title">
				<h3>Web Development Tutor</h3>
				<p>Jan 2021 - Present | Tutor.com</p>
			</div>
		</div>
		<div class="section-content">
			<p>
				This year I started tutoring students in web development practices. This has been a
				rewarding experience so far helping others get into web development.
			</p>
			<p>Technologies I typically teach include HTML, CSS, Javascript, PHP, and MySQL.</p>
		</div>
	</section>

	<section class="page" in:fly={{ y: 200, delay: 4000, duration: 2000 }} out:fade={{ duration: 0 }}>
		<div class="section-heading">
			<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">
				<picture>
					<source type="image/avif" srcset="/avif/rit-logo2.avif" />
					<img class="section-image" src="/rit-logo2.png" alt="Rochester institute of tech logo" />
				</picture>
			</a>
			<div class="section-title">
				<h3>IT Web and Mobile Computing - B.S.</h3>
				<p>Sep 2019 - Present | Zagreb, Croatia</p>
			</div>
		</div>
		<div class="section-content">
			<p>
				I am currently a full-time student aiming to get my degree to increase my future
				opportunities. However, the majority of my learning takes place during my free time.
			</p>
			<q>
				The web and mobile computing major is about combining people and technology to bring out the
				best in both. In this web development degree students learn how to integrate the back end
				code with the front end user experience...
			</q>
			<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">Read more..</a
			>
		</div>
	</section>

	<section class="page" in:fly={{ y: 200, delay: 4500, duration: 2000 }} out:fade={{ duration: 0 }}>
		<div class="section-heading">
			<picture>
				<source type="image/avif" srcset="/avif/defense.avif" />
				<img class="section-image" src="/defense.png" alt="dod logo" />
			</picture>

			<div class="section-title">
				<h3>Telecommunications Technician</h3>
				<p>Jun 2013 - Jun 2019 | US Dept. of Defense</p>
			</div>
		</div>
		<div class="section-content">
			<p>
				I started my career in the Department of Defense working on Telecommunications Equipment
				such as Telephone branch exchanges, Server racks, and remote sensing devices.
			</p>
			<p>
				I am thankful for the leadership opportunities and other skills I was able to obtain from
				this career.
			</p>
			<p>
				My job allowed me to travel to numerous countries (including Bahrain, Italy, and Croatia).
			</p>
			<p>
				This unique experience allowed me to live among many different cultures and get some of the
				best experiences of my life.
			</p>
		</div>
	</section>
	<a href="/contact">
		<section
			class="page flex between page-end"
			in:fly={{ y: -200, duration: 1000, delay: 5000 }}
			out:fade={{ duration: 0 }}
		>
			<h2 class="learn" in:fly={{ x: 200, duration: 1000, delay: 4000 }}>Contact Me</h2>
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
		margin-bottom: 1rem;
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
		animation: stagger 2s steps(18) forwards 1s;
	}

	.typewriter::after {
		width: 0.125em;
		background: transparent;
		animation: stagger 2s steps(18) forwards 1s, blink 600ms steps(18) 10;
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
		font-size: 1.4rem;
		@include respond-to('small') {
			font-size: 1.5rem;
		}
	}
</style>

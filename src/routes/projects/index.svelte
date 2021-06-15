<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - Projects</title>
</svelte:head>

<h1>My Projects</h1>
<section class="page main" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h3>Real Estate Website (Full-Stack) <span>April 2021</span></h3>
	<p>
		The Real estate application utilized the Spring Boot Framework as a back end written in the Java
		programming Language, as well as the VueJS Framework as a front end.
	</p>
	<p>Listings were stored in a MySQL database.</p>
	<p>Utilized JWT based authentication for realtors to manage the listings.</p>

	<h4>Technologies Used</h4>
	<div class="technologies-wrapper">
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/vue.avif'} />
			<img src={'/technologies/vue.png'} alt="Vue JS Logo" />
		</picture>
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/spring.avif'} />
			<img src={'/technologies/spring.png'} alt="Spring Boot Logo" />
		</picture>
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/mysql.avif'} />
			<img src={'/technologies/mysql.png'} alt="MySQL Logo" />
		</picture>
	</div>
</section>

<style lang="scss">
	section {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		transition: 500ms all ease;
	}

	section:hover {
		transform: translateY(-3%);
		background-color: hsl(0, 0%, 97%);
	}
	h1 {
		margin: 2rem;
		font-size: 1.5rem;
		text-align: center;
		@include respond-to('small') {
			font-size: 1.8rem;
		}
	}

	h2 {
		margin-top: 2rem;
		font-size: 1.4rem;
		text-align: center;
		@include respond-to('small') {
			font-size: 1.5rem;
			text-align: center;
		}
	}

	h3 {
		font-size: 1.1rem;
		@include respond-to('small') {
			font-size: 1.3rem;
		}
	}

	h3 > span {
		color: hsl(0, 0%, 30%);
		font-size: 1rem;
		font-style: italic;
	}

	p {
		color: hsl(0, 0%, 30%);
	}

	h4 {
		font-size: 1.2rem;
	}

	.technologies-wrapper {
		display: flex;
		gap: 1rem;
	}

	.technologies-wrapper picture img {
		display: block;
		height: 4rem;
	}
</style>

<script>
	import ImageViewer from '$lib/ImageViewer/image-viewer.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - Projects</title>
</svelte:head>

<h1>My Projects</h1>
<section class="page main" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h3>Web Development Startup (Full-Stack) <span>June 2021</span></h3>
	<p>
		I'm currently working on my startup company website BatesWebTech.com. I plan to go live with
		this around October 2021.
	</p>
	<p>I'm using the framework Next.js as the core technology in this project.</p>

	<h4>Technologies Used</h4>
	<div class="technologies-wrapper">
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/nextjs.avif'} />
			<img src={'/technologies/nextjs.png'} alt="Next JS Logo" />
		</picture>
	</div>
	<div class="project-images">
		<ImageViewer
			src="bateswebtech1"
			alt="startup company project image"
			thumb="bateswebtech1thumb"
			avif={true}
			height="5vh"
		/>
		<ImageViewer
			src="bateswebtech2"
			alt="startup company project image"
			thumb="bateswebtech2thumb"
			avif={true}
			height="5vh"
		/>
	</div>
</section>
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
			<p class="text-center">Vue.JS</p>
		</picture>
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/spring.avif'} />
			<img src={'/technologies/spring.png'} alt="Spring Boot Logo" />
			<p class="text-center">Spring Boot</p>
		</picture>
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/java.avif'} />
			<img src={'/technologies/java.png'} alt="Java Logo" />
			<p class="text-center">Java</p>
		</picture>
		<picture>
			<source type="image/avif" srcset={'/avif/technologies/mysql.avif'} />
			<img src={'/technologies/mysql.png'} alt="MySQL Logo" />
			<p class="text-center">MySQL</p>
		</picture>
	</div>
	<div class="project-images">
		<ImageViewer
			src="realestate"
			alt="real estate project image"
			thumb="realestate-thumb"
			avif={true}
			height="5vh"
		/>
	</div>
</section>

<style lang="scss">
	.project-images {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	section {
		gap: 1rem;
		display: flex;
		flex-direction: column;
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

<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - About</title>
</svelte:head>

<h1 in:fly={{ y: 200, duration: 1500 }} out:fade={{ duration: 0 }}>Who is Eli Bates?</h1>
<section class="page main" in:fly={{ y: 200, duration: 1500 }} out:fade={{ duration: 0 }}>
	<h3>I'm a Full Stack Web Developer, living in Zagreb, Croatia.</h3>
</section>

<h2 in:fly={{ y: 200, delay: 1000, duration: 2000 }} out:fade={{ duration: 0 }}>
	Education and Work Experience
</h2>

<section class="page" in:fly={{ y: 200, delay: 1000, duration: 2000 }} out:fade={{ duration: 0 }}>
	<div class="section-heading">
		<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">
			<picture>
				<source type="image/avif" srcset="/tutor-logo.png" />
				<img class="section-image" src="/tutor-logo.png" alt="Tutor.com logo" />
			</picture>
		</a>
		<div class="section-title">
			<h3>Web Development Tutor</h3>
			<p>Sep 2019 - Present | Tutor.com</p>
		</div>
	</div>
	<div class="section-content">
		<p>
			I am currently a full-time student aiming to get my degree to increase my future
			opportunities. However, the majority of my learning takes place during my free time.
		</p>
		<q>
			The web and mobile computing major is about combining people and technology to bring out the
			best in both. In this web development degree students learn how to integrate the back end code
			with the front end user experience, and are able to do it across several languages and
			platforms, to impact the app design process at all levels. Students are highly valuable to
			employers seeking today’s most skilled application developers.
		</q>
		<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">Learn more..</a>
	</div>
</section>

<section class="page" in:fly={{ y: 200, delay: 2000, duration: 2000 }} out:fade={{ duration: 0 }}>
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
			best in both. In this web development degree students learn how to integrate the back end code
			with the front end user experience, and are able to do it across several languages and
			platforms, to impact the app design process at all levels. Students are highly valuable to
			employers seeking today’s most skilled application developers.
		</q>
		<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">Learn more..</a>
	</div>
</section>

<section class="page" in:fly={{ y: 200, delay: 3000, duration: 2000 }} out:fade={{ duration: 0 }}>
	<div class="section-heading">
		<picture>
			<source type="image/avif" srcset="/avif/defense.avif" />
			<img class="section-image" src="/defense.png" alt="dod logo" />
		</picture>

		<div class="section-title">
			<h3>Telecommunications Technician</h3>
			<p>Jun 2013 - Jun 2019 | U.S. Department of Defense</p>
		</div>
	</div>
	<div class="section-content">
		<p>
			I started my career in the Department of Defense working on Telecommunications Equipment such
			as Telephone branch exchanges, Server racks, and remote sensing devices.
		</p>
		<p>
			I am thankful for the leadership opportunities and other skills I was able to obtain from this
			career.
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
<div class="spacer" />

<style lang="scss">
	.portrait {
		display: block;
		margin-left: auto;
		margin-right: auto;

		width: 12rem;
		border-radius: 6rem;

		@include respond-to('small') {
			display: none;
		}
	}
	article {
		margin: 1rem 0;
	}
	.article-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include respond-to('large') {
			flex-direction: row;
			margin-top: 2rem;
		}
	}

	.article-picture {
		margin-top: 1rem;

		@include respond-to('small') {
			margin-top: 0;
		}
	}

	.content-text p {
		margin-bottom: 1rem;
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

	p {
		color: hsl(0, 0%, 30%);
		font-size: 1.15rem;
		line-height: 1.5rem;
		letter-spacing: 0.03em;
	}
	q {
		color: hsl(0, 0%, 40%);
		font-size: 1.15rem;
		line-height: 1.5rem;
		letter-spacing: 0.03em;
		margin-bottom: 1rem;
	}
</style>

<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - About</title>
</svelte:head>

<section class="page main" in:fly={{ x: -200, duration: 1500 }} out:fade={{ duration: 0 }}>
	<h2>I enjoy learning new technologies and making ideas come to life.</h2>
	<picture>
		<source type="image/avif" srcset="/avif/eli.avif" />
		<img src="/eli.png" alt="Portrait of Eli Bates" class="portrait" />
	</picture>
	<article>
		<div class="flex flex-xlg-row">
			<div class="content-text">
				<p>
					I got started with computer technologies from a young age, and have been eager to learn my
					entire life. My first programming language was Visual Basic 6... I used this to make small
					games like tic-tac-toe many years ago.
				</p>
				<p>You could often find me in my teenage years tinkering with open source java games.</p>
				<p>
					I am currently a student, working part-time for a U.S.-based company tutoring in web
					development.
				</p>
				<p>I enjoy outdoor activities and am often spending my weekend's biking or traveling.</p>
			</div>
			<picture>
				<source type="image/avif" srcset="/avif/travel.avif" />
				<img src="/travel.jpg" alt="traveling with bike" class="content-image" />
			</picture>
		</div>
	</article>
</section>

<section class="page" in:fly={{ y: 200, delay: 1000, duration: 2000 }} out:fade={{ duration: 0 }}>
	<div class="section-heading">
		<a href="https://www.rit.edu/study/web-and-mobile-computing-bs" target="_blank">
			<picture>
				<source type="image/avif" srcset="/avif/rit-logo2.avif" />
				<img class="section-image" src="/rit-logo2.png" alt="Rochester institute of tech logo" />
			</picture>
		</a>
		<div class="section-title">
			<h2>IT Web and Mobile Computing - B.S.</h2>
			<p>Sep 2019 - Present | Zagreb, Croatia</p>
		</div>
	</div>
	<div class="section-content">
		<p>
			I decided to pursue a degree in web development. However, the majority of my learning takes
			place during my own free time.
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
		<picture>
			<source type="image/avif" srcset="/avif/defense.avif" />
			<img class="section-image" src="/defense.png" alt="dod logo" />
		</picture>

		<div class="section-title">
			<h2>Telecommunications Technician</h2>
			<p>Jun 2013 - Jun 2019</p>
		</div>
	</div>
	<div class="section-content">
		<p>
			I started my career in the Department of Defense working on Telecommunications Equipment such
			as Telephone branch exchanges, Server racks, and remote sensing devices. I am thankful for the
			leadership opportunities and other skills I was able to obtain from this career.
		</p>
		<p>
			My job allowed me to travel to numerous countries (including Bahrain, Italy, and Croatia).
			This unique experience allowed me to live among many different cultures and get some of the
			best experiences of my life.
		</p>
	</div>
</section>

<style lang="scss">
	.portrait {
		display: block;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		border-radius: 6rem;
		@include respond-to('small') {
			display: none;
		}
	}
	article {
		margin: 1rem 0;
	}
	h1 {
		margin-bottom: 1.2rem;
	}
	h2 {
		font-size: 1.4rem;
	}

	h2 {
		font-size: 1.2rem;
		@include respond-to('small') {
			font-size: 1.5rem;
		}
	}
	p,
	q {
		color: hsl(0, 0%, 20%);
		margin-bottom: 1rem;
	}
</style>

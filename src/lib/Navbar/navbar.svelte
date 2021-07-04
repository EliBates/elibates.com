<script>
	import Icon from 'svelte-awesome';
	import {
		faUser,
		faCode,
		faFolderOpen,
		faCommentsDollar
	} from '@fortawesome/free-solid-svg-icons';
</script>

<nav class="navbarDesktop" role="navigation">
	<ul>
		<li class="logo">
			<a href="/">
				<picture>
					<source type="image/avif" srcset="/avif/eli.avif" />
					<img src="/eli.png" alt="Portrait of Eli Bates" />
				</picture>
				<div>
					<h1>Eli Bates</h1>
					<h2>Web Developer</h2>
				</div>
			</a>
		</li>
		<li>
			<a class="navLink" href="/"
				><Icon data={faUser} scale="1.3" style="color: blue;" /><span>Home</span></a
			>
		</li>
		<li>
			<a class="navLink" href="/skills"
				><Icon data={faCode} scale="1.3" style="color: green;" /><span>Technologies</span></a
			>
		</li>
		<li>
			<a class="navLink" href="/projects"
				><Icon data={faFolderOpen} scale="1.3" style="color: brown;" /><span>Projects</span></a
			>
		</li>
		<li>
			<a class="navLink" href="/contact"
				><Icon data={faCommentsDollar} scale="1.3" style="color: rgb(255, 204, 0);" /><span
					>Contact Me</span
				></a
			>
		</li>
		<li>
			<a class="navLink" href="https://github.com/elibates" target="_blank"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
					><path
						d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
					/></svg
				><span>Github</span></a
			>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		// background-color: #568eff;
		background-color: #e4f3ffbb;
		width: 15rem;
		height: 100vh;
		box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.4);

		@include respond-to('small') {
			position: fixed;
			top: 0;
			left: 0;
		}
	}

	.logo img {
		display: block;
		width: 75%;
		border-radius: 4rem;
		margin-top: 1rem;
		margin-left: auto;
		margin-right: auto;
		height: auto;
	}

	.logo div {
		margin: 1rem;
	}

	.logo h1 {
		text-align: center;
	}

	.logo h2 {
		font-size: 1.1rem;
		color: hsl(0, 0%, 30%);
		text-align: center;
	}

	ul {
		height: 100%;
	}
	li {
		height: 4rem;
	}
	.logo {
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navLink span {
		transition: 400ms all ease;
	}
	.navLink {
		font-family: 'sofia-pro', sans-serif;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: hsl(0, 0%, 20%);
		height: 100%;
		width: 100%;
		padding-left: 1.5rem;
		transition: 400ms all ease;

		&:hover {
			background-color: hsl(0, 0%, 98%);
			transform: translateX(5%);
		}

		&:hover span {
			transform: translateX(25%);
		}
	}

	span {
		margin-left: 1rem;
	}

	.fa-user {
		color: blue;
	}

	.fa-chart-bar {
		color: green;
	}

	.fa-folder-open {
		color: brown;
	}

	.fa-comments-dollar {
		color: rgb(255, 204, 0);
	}
</style>

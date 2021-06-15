<script>
	import Icon from 'svelte-awesome';
	import {
		faUser,
		faChartBar,
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
			<a class="navLink" href="/about"
				><Icon data={faUser} scale="1.3" style="color: blue;" /><span>About Me</span></a
			>
		</li>
		<li>
			<a class="navLink" href="/skills"
				><Icon data={faChartBar} scale="1.3" style="color: green;" /><span>Technologies</span></a
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
	</ul>
</nav>

<style lang="scss">
	nav {
		// background-color: #568eff;
		background-color: #e4f3ffbb;
		width: 15rem;
		height: 100vh;
		box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.4);
		z-index: 200;

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

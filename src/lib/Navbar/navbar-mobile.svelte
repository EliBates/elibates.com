<script lang="ts">
	import Icon from 'svelte-awesome';
	import {
		faBars,
		faUser,
		faCode,
		faFolderOpen,
		faCommentsDollar
	} from '@fortawesome/free-solid-svg-icons';
	import Overlay from '$lib/Overlay/overlay.svelte';
	import { fly } from 'svelte/transition';
	let drawerOpen: Boolean = false;

	function closeDrawer(): void {
		drawerOpen = false;
	}
</script>

<div class="navbarMobile">
	<div class="topBar">
		<button class="menuBtn" on:click={(e) => (drawerOpen = true)} href=""
			><Icon data={faBars} style="color: hsl(0, 0%, 20%); cursor: pointer;" scale="2" /></button
		>
		<a href="/">
			<h1>Eli Bates</h1>
		</a>
		<div class="spacer" />
	</div>

	{#if drawerOpen}
		<nav transition:fly={{ x: -200, duration: 500 }} role="navigation">
			<ul>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/"
						><Icon data={faUser} style="color: blue;" /><span>About Me</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/skills"
						><Icon data={faCode} style="color: green;" /><span>Skills</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/projects"
						><Icon data={faFolderOpen} style="color: brown;" /><span>Projects</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/contact"
						><Icon data={faCommentsDollar} style="color: rgb(255, 204, 0);" /><span>Contact Me</span
						></a
					>
				</li>
				<li>
					<a
						class="navLink"
						on:click={closeDrawer}
						href="https://github.com/elibates"
						target="_blank"
						><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							><path
								d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
							/></svg
						><span>Github</span></a
					>
				</li>
			</ul>
		</nav>
		<Overlay on:click={closeDrawer} />
	{/if}
</div>

<style lang="scss">
	nav {
		position: fixed;
		background-color: white;
		width: 15rem;
		height: 100vh;
		box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.4);
		z-index: 200;
	}
	li {
		height: 4rem;
	}
	.navLink {
		padding-left: 2rem;
		display: flex;
		justify-content: left;
		align-items: center;
		color: hsl(0, 0%, 20%);
		height: 100%;
		width: 100%;

		&:hover {
			background-color: hsl(0, 0%, 90%);
		}
	}

	.menuBtn {
		background: transparent;
		border: none;
	}

	.topBar {
		box-shadow: 0 1px 1px hsla(0, 0%, 0%, 0.1);
		background-color: white;
		height: 4rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 1rem;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}

	span {
		margin-left: 1rem;
	}
</style>

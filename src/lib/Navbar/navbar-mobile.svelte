<script lang="ts">
	import Icon from 'svelte-awesome';
	import {
		faBars,
		faUser,
		faChartBar,
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
			><Icon data={faBars} style="color: hsl(0, 0%, 20%);; cursor: pointer;" scale="2" /></button
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
					<a class="navLink" on:click={closeDrawer} href="/about"
						><Icon data={faUser} style="color: blue;" /><span>About Me</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/skills"
						><Icon data={faChartBar} style="color: green;" /><span>Skills</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/projects"
						><Icon data={faFolderOpen} style="color: brown;" /><span>Projects</span></a
					>
				</li>
				<li>
					<a class="navLink" on:click={closeDrawer} href="/contact"
						><Icon data={faCommentsDollar} style="color: rgb(255, 204, 0);" /><span>Hire Me</span
						></a
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
		display: flex;
		justify-content: center;
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

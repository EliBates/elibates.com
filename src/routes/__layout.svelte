<script>
	import NavbarMobile from '$lib/Navbar/navbar-mobile.svelte';
	import Navbar from '$lib/Navbar/navbar.svelte';
	import '$lib/global.scss';
</script>

<Navbar />
<NavbarMobile />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style global lang="scss">
	$color: rgb(0, 0, 0);

	body {
		display: flex;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style: none;
	}

	h1 {
		color: $color;
	}

	#app {
		width: 100%;
		height: 100%;
		display: flex;
	}

	main {
		margin-top: 4rem;
		background-color: hsl(160, 10%, 94%);
		width: 100%;
		z-index: 0;
		min-height: 120vh;
	}

	.navbarDesktop {
		display: none;
	}

	@include respond-to('small') {
		.navbarDesktop {
			display: block;
		}
		.navbarMobile {
			display: none;
		}
		main {
			margin-top: 0;
			margin-left: 15rem;
		}
	}
</style>

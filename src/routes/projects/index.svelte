<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - Projects</title>
</svelte:head>

<section class="page main" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h1>My Projects</h1>
	<p>coming soon...</p>
</section>

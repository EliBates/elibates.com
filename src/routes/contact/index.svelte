<script>
	import { fly, fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Eli Bates - About</title>
</svelte:head>

<section class="page main" in:fly={{ duration: 2000 }} out:fade={{ duration: 0 }}>
	<h1>Get in touch</h1>
	<p>eli.m.bates@gmail.com</p>
</section>

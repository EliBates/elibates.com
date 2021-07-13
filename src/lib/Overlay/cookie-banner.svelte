<script lang="ts">
	import { cookieModalClosed } from '$lib/store';
</script>

<section>
	<div>
		<p>
			By using this website you agree to the use of cookies to deliver and improve the website
			experience.
		</p>
		<a href="/privacy-policy">privacy & cookie policy</a>
	</div>

	<div>
		<a href="#" on:click|preventDefault={() => ($cookieModalClosed = true)}
			>Accept functional cookies</a
		>
	</div>
</section>

<style lang="scss">
	section {
		position: fixed;
		bottom: 0;
		left: 0;

		width: 100vw;
		display: flex;
		flex-direction: column-reverse;
		text-align: center;
		justify-content: center;

		gap: 2rem;
		background-color: hsl(0, 0%, 80%);
		padding: 1rem;

		@include respond-to('small') {
			height: 10remrem;
		}
	}
</style>

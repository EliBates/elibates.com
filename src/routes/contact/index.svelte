<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { load } from 'recaptcha-v3';
	import validator from 'validator';

	let form: HTMLFormElement;

	let name: HTMLInputElement;
	let email: HTMLInputElement;
	let message: HTMLTextAreaElement;
	let button: HTMLInputElement;

	let sent: boolean = false;
	let loading: boolean = false;

	interface IFormRequest {
		name: string;
		email: string;
		message: string;
		captcha: string;
	}

	async function sendForm(request: IFormRequest) {
		loading = true;
		const res = await fetch('https://elibates.com:5000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: '*/*'
			},
			body: JSON.stringify(request)
		});
		const body = await res.json();

		if (body.success) {
			loading = false;
			sent = true;
			form.reset();
		} else {
			alert('There was an error sending your message.');
		}
	}

	function onSubmit(event: Event) {
		load('6LcOXScbAAAAAETO2r_-0Z8bFyY4kBIH9KRr942M').then((recaptcha) => {
			recaptcha.execute('submit').then((token) => {
				const data = new FormData(form);
				if (!validator.isEmail(email.value)) {
					alert('email not valid');
					return;
				}

				const info: IFormRequest = {
					name: data.get('nameField') + '',
					email: data.get('emailField') + '',
					message: data.get('messageField') + '',
					captcha: token
				};
				sendForm(info);
			});
		});
	}
</script>

<svelte:head>
	<title>Eli Bates - Contact Me</title>
</svelte:head>

<section class="page main" in:fly={{ y: 200, duration: 1500 }} out:fade={{ duration: 0 }}>
	<div class="title">
		{#if !sent}
			<h1>Contact Me</h1>
		{:else}
			<h1>Thanks!</h1>
		{/if}
	</div>
	<form bind:this={form} on:submit|preventDefault={onSubmit} method="post" class="contact-form">
		{#if !sent}
			<div class="form-field">
				<label for="nameField">Full Name</label>
				<input bind:this={name} type="text" id="nameField" name="nameField" required />
			</div>
			<div class="form-field">
				<label for="emailField">Email</label>
				<input bind:this={email} type="email" id="emailField" name="emailField" required />
			</div>
			<div class="form-field">
				<label for="messageField">Message</label>
				<textarea bind:this={message} type="text" id="messageField" name="messageField" required />
			</div>
			<input bind:this={button} class="submit-btn" type="submit" value="Submit" />
		{:else if !loading}
			<p class="muted">Your message has been sent. I will respond soon!</p>
			<button on:click={() => (sent = !sent)} class="submit-btn">Send again?</button>
		{:else}
			<div class="svg-loader">
				<svg class="svg-container" height="100" width="100" viewBox="0 0 100 100">
					<circle class="loader-svg bg" cx="50" cy="50" r="45" />
					<circle class="loader-svg animate" cx="50" cy="50" r="45" />
				</svg>
			</div>
		{/if}
	</form>
</section>

<style lang="scss">
	.title {
		margin-bottom: 1rem;
		margin-left: 0rem;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@include respond-to('small') {
			padding: 1rem 4rem;
		}
	}

	.form-field {
		display: flex;
		flex-direction: column;
	}
	label {
		margin-bottom: 0.1rem;
	}
	input,
	textarea {
		border: 1px solid #ccc;
		border-radius: 0.2rem;
		padding: 0.75rem;
		transition: 0.3;
		font-size: 1.1rem;
		@include respond-to('small') {
			padding: 0.5rem;
			font-size: 1rem;
		}
	}

	input:hover,
	textarea:hover {
		outline: none;
		border: 1px solid #095484;
		background: #e6eef7;
	}

	.submit-btn {
		border-radius: 0.2rem;
		background-color: #095484;
		color: white;
		padding: 1rem 1rem;
		font-size: 1.1rem;
		transition: all 400ms ease;
		@include respond-to('small') {
			padding: 0.5rem 1rem;
			width: 10rem;
		}
	}

	.submit-btn:focus {
		outline: solid 2px blue;
	}

	.submit-btn:hover {
		background-color: hsl(203, 87%, 38%);
		cursor: pointer;
	}

	textarea {
		height: 10rem;
	}

	.svg-loader {
		display: flex;
		position: relative;
		align-content: space-around;
		justify-content: center;
	}
	.loader-svg {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		fill: none;
		stroke-width: 5px;
		stroke-linecap: round;
		stroke: hsl(203, 87%, 38%);
	}
	.loader-svg.bg {
		stroke-width: 8px;
		stroke: rgb(222, 221, 244);
	}

	.animate {
		stroke-dasharray: 242.6;
		animation: fill-animation 1s cubic-bezier(1, 1, 1, 1) 0s infinite;
	}

	@keyframes fill-animation {
		0% {
			stroke-dasharray: 40 242.6;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 141.3;
			stroke-dashoffset: 141.3;
		}
		100% {
			stroke-dasharray: 40 242.6;
			stroke-dashoffset: 282.6;
		}
	}
</style>

<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { load } from 'recaptcha-v3';
	import validator from 'validator';

	let form: HTMLFormElement;

	let name: HTMLInputElement;
	let email: HTMLInputElement;
	let message: HTMLTextAreaElement;

	let button: HTMLInputElement;

	interface IFormRequest {
		name: string;
		email: string;
		message: string;
		captcha: string;
	}

	async function sendForm(request: IFormRequest) {
		const res = await fetch('https://elibates.com:5000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: '*/*'
			},
			body: JSON.stringify(request)
		});
		button.disabled = true;
		const body = await res.json();

		if (body.success) {
			alert('Your message has been sent!');
			form.reset();
		} else {
			alert('There was an error sending your message.');
		}
		button.disabled = false;
	}

	function onSubmit(event: Event) {
		load('6LcOXScbAAAAAETO2r_-0Z8bFyY4kBIH9KRr942M').then((recaptcha) => {
			recaptcha.execute('submit').then((token) => {
				console.log(event);
				console.log(token); // Will print the token
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
		<h1>Contact Me</h1>
		<p class="muted">I will respond as soon as I can!</p>
	</div>
	<form bind:this={form} on:submit|preventDefault={onSubmit} method="post" class="contact-form">
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
	</form>
</section>

<style lang="scss">
	.title {
		margin-bottom: 1rem;
	}
	h1 {
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
		padding: 1rem 1rem;
		font-size: 1.1rem;
		@include respond-to('small') {
			padding: 0.5rem 1rem;
			width: 6rem;
		}
	}

	.submit-btn:hover {
		cursor: pointer;
	}

	textarea {
		height: 10rem;
	}
</style>

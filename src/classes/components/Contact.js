class Contact {
	static init = (data) => {
		const template = `<div class="contact-modal modal" id="contact" role="dialog" aria-modal="true" aria-label="Contact" hidden>
				<div class="contact-modal__wrap">
					<button class="contact-modal__close modal-close" data-target="contact">
					<span class="fas fa-times modal-close" aria-hidden="true"></span>
					<span class="modal-close sr-only">Fermer la modale</span>
					</button>
					<div class="contact-form">
						<h1 class="contact-form__title">Contactez- moi<br />${data.name}</h1>
						<form class="contact-form__form">
							<label for="firstName" class="contact-form__label">
								Prénom
								<input
									type="text"
									name=""
									id="firstName"
									class="contact-form__input"
								/>
							</label>
							<label for="lastName" class="contact-form__label">
								Nom
								<input
									type="text"
									name=""
									id="lastName"
									class="contact-form__input"
								/>
							</label>
							<label for="email" class="contact-form__label">
								Email
								<input
									type="email"
									name=""
									id="email"
									class="contact-form__input"
								/>
							</label>
							<label for="message" class="contact-form__label">
								Votre message
								<textarea
									name=""
									id="message"
									class="contact-form__textarea"
								></textarea>
							</label>
							<button class="contact-form__submit">Envoyer</button>
						</form>
					</div>
				</div>
			</div>`;
            return template;
	};
}
export default Contact;

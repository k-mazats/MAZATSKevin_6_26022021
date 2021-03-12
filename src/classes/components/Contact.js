class Contact {
	static init = (data) => {
		const template = `<div class="contact-modal" id="contact" hidden>
				<div class="contact-modal__wrap">
					<a href="" class="modal-close" data-target="contact">
						<i class="fas fa-times contact-modal__close modal-close"></i>
					</a>
					<div class="contact-form">
						<h1 class="contact-form__title">Contactez- moi<br />${data.name}</h1>
						<form action="" class="contact-form__form">
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
							<button type="submit" class="contact-form__submit">Envoyer</button>
						</form>
					</div>
				</div>
			</div>`;
            return template;
	};
}
export default Contact;

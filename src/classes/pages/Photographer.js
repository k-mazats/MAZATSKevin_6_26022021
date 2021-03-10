import Category from "/src/classes/components/Category.js";
import MediasGrid from "/src/classes/components/MediasGrid.js";
class Photographer {
	static init = (photographer,medias) => {
		const template = `<header role="banner" class="header">
				<a href="../index.html" class="header__link router-link">
					<img
						src="../img/logo-fisheye.png"
						alt="Fisheye Homepage"
						class="header__img router-link"
					/>
				</a>
			</header>
			<section class="section photographer-infos">
				<div class="photographer-infos__details">
					<h1 class="photographer-infos__name">${photographer.name}</h1>
					<span class="photographer-infos__location">
						<p>${photographer.city}</p>
					</span>
					<span class="photographer-infos__catchphrase">
						<p>${photographer.tagline}</p>
					</span>
					<div class="photographer-infos__categories">
						<ul class="photographer-infos__categories-list">
							${Category.init("photographer", photographer.tags)}
							
						</ul>
					</div>
				</div>
				<div class="photographer-infos__contact-wrap">
					<button class="photographer-infos__contact modal-trigger" data-target="contact">Contactez-moi</button>
				</div>
				<div class="photographer-infos__img">
					<img
						class="user__img"
						src="../img/Sample Photos/Photographers ID Photos/${photographer.portrait}"
						alt=""
					/>
				</div>
			</section>

			<section class="section photographer-medias">
				<div class="photographer-medias__sort-wrap">
					<span id="sortMediasLabel" class="photographer-medias__sort-label">
						Trier par
					</span>
					<button
						id="sortMediaButton"
						class="photographer-medias__sort-button"
						aria-haspopup="listbox"
						aria-labelledby="sortMediasLabel"
					>
						Popularité
					</button>
					<ul
						id="sortMediaList"
						class="photographer-medias__sort-list"
						tabindex="-1"
						role="listbox"
						aria-labelledby="exp_elem"
					>
						<li class="photographer-medias__sort-option" role="option">
							Popularité
						</li>
						<li class="photographer-medias__sort-option" role="option">Date</li>
						<li class="photographer-medias__sort-option" role="option">
							Titre
						</li>
					</ul>
				</div>
				<div class="photographer-medias__grid">
					${MediasGrid.init(medias, photographer)}
					
				</div>
			</section>
			<div class="contact-modal" id="contact" hidden>
				<div class="contact-modal__wrap">
					<i class="fas fa-times contact-modal__close modal-close" data-target="contact"></i>
					<div class="contact-form">
						<h1 class="contact-form__title">Contactez- moi<br />${photographer.name}</h1>
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
			</div>
			<div class="lightbox-modal"  id="lightbox" hidden>
				<div class="lightbox-modal__wrap" id="lightbox">
					<button class="lightbox-modal__close modal-close" data-target="lightbox">X</button>
					<a href="" class="lightbox-modal__previous"><i class="fas fa-chevron-left"></i></a>
					<img
						src="img/Sample Photos/Mimi/Animals_Rainbow.jpg"
						alt=""
						class="lightbox-modal__img"
					/>
					<a href="" class="lightbox-modal__next"><i class="fas fa-chevron-right"></i></a>
					<div class="lightbox-modal__title-wrap">
						<p class="lightbox-modal__title">Arc en ciel</p>
					</div>
				</div>
			</div>`;
		return template;
	};
}
export default Photographer;

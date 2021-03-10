import Category from "/src/classes/components/Category.js";
import MediasGrid from "/src/classes/components/MediasGrid.js";
import Contact from "/src/classes/components/Contact.js";
import Lightbox from "/src/classes/components/Lightbox.js";
class Photographer {
	static init = (photographer, medias) => {
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
						class="photographer-medias__sort-button dropdown-button"
						aria-haspopup="listbox"
						aria-labelledby="sortMediasLabel"
					>
						Popularité
					</button>
					<ul
						id="sortMediaList"
						class="photographer-medias__sort-list dropdown-content"
						tabindex="-1"
						role="listbox"
						aria-labelledby="exp_elem"
					>
						<li class="photographer-medias__sort-option dropdown-content" role="option">
							Popularité
						</li>
						<li class="photographer-medias__sort-option dropdown-content" role="option">Date</li>
						<li class="photographer-medias__sort-option dropdown-content" role="option">
							Titre
						</li>
					</ul>
				</div>
				${MediasGrid.init(medias, photographer)}	
			</section>
			${Contact.init(photographer)}
			${Lightbox.init(photographer)}
			`;
		return template;
	};
}
export default Photographer;

import Category from "/src/classes/components/Category.js";
import MediasGrid from "/src/classes/components/MediasGrid.js";
import Contact from "/src/classes/components/Contact.js";
import Lightbox from "/src/classes/components/Lightbox.js";
import PhotographerWidget from "/src/classes/components/PhotographerWidget.js";
class Photographer {
	static init = (photographer, medias, sortBy, sortById) => {
		const template = `<header role="banner" class="header">
				<a href="../index.html" class="header__link router-link background-element">
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
					<button class="photographer-infos__contact modal-trigger background-element" data-target="contact">Contactez-moi</button>
				</div>
				<div class="photographer-infos__img">
					<img
						class="user__img"
						src="../img/Sample Photos/Photographers ID Photos/${photographer.portrait}"
						alt="Portrait ${photographer.name}"
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
						class="photographer-medias__sort-button dropdown-button background-element"
						role="button"
						aria-haspopup="listbox"
						
						aria-expanded="false"
					>
						${sortBy}
					</button>
					<ul
						id="sortMediaList"
						class="photographer-medias__sort-list dropdown-content"
						tabindex="-1"
						role="listbox"
						aria-labelledby="sortMediasLabel"
						aria-activedescendant="${sortById}"
					>
						<li class="photographer-medias__sort-option">
							<a  id="sortByPopularity"href="" class="photographer-medias__sort-option-link dropdown-content" role="option">Popularité</a>
						</li>
						<li class="photographer-medias__sort-option">
							<a id="sortByDate" href="" class="photographer-medias__sort-option-link dropdown-content" role="option">Date</a>
						</li>
						<li class="photographer-medias__sort-option">
							<a id="sortByTitle" href="" class="photographer-medias__sort-option-link dropdown-content" role="option">Titre</a>
						</li>
					</ul>
				</div>
				${MediasGrid.init(medias, photographer, sortBy)}	
			</section>
			${Contact.init(photographer)}
			${Lightbox.init(photographer, medias)}
			${PhotographerWidget.init(medias, photographer)}
			`;
		return template;
	};
}
export default Photographer;

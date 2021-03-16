class Lightbox {
	static init = (photographer, medias) => {
		const template = `<div class="lightbox-modal modal"  id="lightbox" role="dialog" aria-modal="true" aria-label="Gallerie medias" hidden>
				<div class="lightbox-modal__wrap">
				<a href="" class="fas fa-times lightbox-modal__close modal-close screen-only" data-target="lightbox">
					
					</a>
					<a href="" class="lightbox-modal__close modal-close sr-only" data-target="lightbox">
					Fermer la modale
					</a>
				<a href="backward" class="lightbox-modal__previous carousel-controls"><i class="fas fa-chevron-left carousel-controls"></i></a>
					<div class="lightbox-modal__img-wrap">${this.getImages(
						photographer,
						medias
					)}</div>
					<a href="forward" class="lightbox-modal__next carousel-controls"><i class="fas fa-chevron-right carousel-controls"></i></a>
					<div class="lightbox-modal__title-wrap">
						<p class="lightbox-modal__title"></p>
					</div>
				</div>
			</div>`;
		return template;
	};
	static getImages = (photographer, medias) => {
		let template = ``;
		for (let media of medias) {
			switch (media.type) {
				case "image":
					template += `<img 
						role="tabpanel"
						src="../img/Sample Photos/${media.getFolder(photographer)}/${media.data.image}"
						alt="${media.data.alt}"
						class="lightbox-modal__img carousel__image"
						data-id="${media.data.id}"
						data-name="${media.data.alt}"
						aria-hidden="true"
					/>`;
					break;
				case "video":
					template += `<img 
						role="tabpanel"
						src="../img/Sample Photos/${media.getFolder(photographer)}/${media.getThumbnail()}"
						alt="${media.data.alt}"
						class="lightbox-modal__img carousel__image"
						data-id="${media.data.id}"
						data-name="${media.data.alt}"
						aria-hidden="true"
					/>`;
					break;
			}
		}
		return template;
	};
}
export default Lightbox;

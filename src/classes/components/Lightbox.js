class Lightbox {
	static init = (photographer, medias) => {
		const template = `<div class="lightbox-modal modal"  id="lightbox" hidden>
				<div class="lightbox-modal__wrap">
				<button class="lightbox-modal__close modal-close" data-target="lightbox">X</button>
				<a href="backward" class="lightbox-modal__previous carousel-controls"><i class="fas fa-chevron-left carousel-controls"></i></a>
					<div class="lightbox-modal__img-wrap">${this.getImages(photographer, medias)}</div>
					<a href="forward" class="lightbox-modal__next carousel-controls"><i class="fas fa-chevron-right carousel-controls"></i></a>
					<div class="lightbox-modal__title-wrap">
						<p class="lightbox-modal__title"></p>
					</div>
				</div>
			</div>`;
		return template;
	};
	static getImages = (photographer,medias) => {
		let template = ``;
		for(let media of medias){
			switch(media.type){
				case "image": 
				template += `<img
						src="../img/Sample Photos/${media.getFolder(photographer)}/${media.data.image}"
						alt=""
						class="lightbox-modal__img carousel__image"
						data-id="${media.data.id}"
						data-name="${media.data.alt}"
					/>`;
					break;
					case "video":
					break;
			}
		}
		return template;
	}
}
export default Lightbox;

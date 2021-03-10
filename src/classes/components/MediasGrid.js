class MediasGrid {
	static init = (data,photographer) => {
        let template = `<div class="photographer-medias__grid">`;
		for(let item of data)
		switch (item.type) {
			case "image":
                template += `<div class="media-card modal-trigger" data-target="lightbox" tabIndex="0">
						<div class="media-card__upper-body modal-trigger">
							<img
								class="media-card__img modal-trigger"
								src="../img/Sample Photos/${item.getFolder(photographer)}/${item.data.image}"
								alt=""
							/>
						</div>
						<div class="media-card__lower-body modal-trigger">
							<p class="media-card__title modal-trigger">${item.getName()}</p>
							<p class="media-card__price modal-trigger">${item.data.price} €</p>
							<p class="media-card__like modal-trigger">${
								item.data.likes
							} <i class="fas fa-heart"></i></p>
						</div>
					</div>`; 
				break;
            case "video":
                break;
		}
        template += `</div>`
        return template
	};
}
export default MediasGrid;

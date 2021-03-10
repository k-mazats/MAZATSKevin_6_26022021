class MediasGrid {
	static init = (data,photographer) => {
        let template = ``;
		for(let item of data)
		switch (item.type) {
			case "image":
                template += `<div class="media-card modal-trigger" data-target="lightbox" tabIndex="0">
						<div class="media-card__upper-body">
							<img
								class="media-card__img"
								src="../img/Sample Photos/${item.getFolder(photographer)}/${item.data.image}"
								alt=""
							/>
						</div>
						<div class="media-card__lower-body">
							<p class="media-card__title">${item.getName()}</p>
							<p class="media-card__price">${item.data.price} €</p>
							<p class="media-card__like">${item.data.likes} <i class="fas fa-heart"></i></p>
						</div>
					</div>`; 
				break;
            case "video":
                break;
		}
        return template
	};
}
export default MediasGrid;

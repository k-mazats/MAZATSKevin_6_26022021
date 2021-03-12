class MediasGrid {
	static init = (data, photographer, sortBy) => {
		let medias;
		switch (sortBy) {
			case "Popularité":
				medias = data.sort(
					(a, b) => parseInt(b.data.likes) - parseInt(a.data.likes)
				);
				break;
			case "Date":
				medias = data.sort(
					(a, b) =>
						new Date(b.data.date.replace(/-/g, "/")) -
						new Date(a.data.date.replace(/-/g, "/"))
				);
				break;
			case "Titre":
				medias = data.sort(function (a, b) {
					if (a.data[a.type] < b.data[b.type]) {
						return -1;
					}
					if (a.data[a.type] > b.data[b.type]) {
						return 1;
					}
					return 0;
				});
				break;
		}
		let template = `<div class="photographer-medias__grid">`;
		for (let item of medias)
			switch (item.type) {
				case "image":
					template += `<a href="" class="media-card modal-trigger background-element" data-target="lightbox" data-id="${
						item.data.id
					}" data-name="${item.getName()}" tabIndex="0">
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
							} <i class="fas fa-heart like-button background-element" data-target="${
						item.data.id
					}" tabIndex="0"></i></p>
						</div>
					</a>`;
					break;
				case "video":
					template += `<a href="" class="media-card modal-trigger background-element" data-target="lightbox" data-id="${
						item.data.id
					}" data-name="${item.getName()}" tabIndex="0">
						<div class="media-card__upper-body modal-trigger">
							
						</div>
						<div class="media-card__lower-body modal-trigger">
							<p class="media-card__title modal-trigger">${item.getName()}</p>
							<p class="media-card__price modal-trigger">${item.data.price} €</p>
							<p class="media-card__like modal-trigger">${
								item.data.likes
							} <i class="fas fa-heart like-button background-element" data-target="${
						item.data.id
					}" tabIndex="0"></i></p>
						</div>
					</a>`;
					break;
			}
		template += `</div>`;
		return template;
	};
}
export default MediasGrid;

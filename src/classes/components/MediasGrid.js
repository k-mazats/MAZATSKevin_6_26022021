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
					if (a.data.alt < b.data[b.type]) {
						return -1;
					}
					if (a.data.alt > b.data[b.type]) {
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
					template += `<div class="media-card">
						<a  href=""class="media-card__upper-body modal-trigger background-element" data-target="lightbox" data-id="${
							item.data.id
						}" data-name="${item.data.alt}" tabIndex="0">
							<img
								class="media-card__img modal-trigger"
								src="../img/Sample Photos/${item.getFolder(photographer)}/${item.data.image}"
								alt="${item.data.alt}"
							/>
						</a>
						<div class="media-card__lower-body">
							<p class="media-card__title" lang="en">${item.data.alt}</p>
							<p class="media-card__price">${item.data.price} €</p>
							<p class="media-card__like">${item.data.likes}
								<span class="sr-only" lang="en">Likes</span>
								</p>
							<button aria-label="J'aime" class="media-card__like-button like-button background-element" data-target="${
								item.data.id
							}" tabIndex="0">
							<span class="fas fa-heart like-button" aria-hidden="true"></span>
							<span class="like-button sr-only">J'aime</span>
							</button>
						</div>
					</div>`;
					break;
				case "video":
					template += `<div class="media-card">
						<a  href="" class="media-card__upper-body modal-trigger background-element" data-target="lightbox" data-id="${
							item.data.id
						}" data-name="${item.data.alt}" tabIndex="0">
							<img
								class="media-card__img modal-trigger"
								src="../img/Sample Photos/${item.getFolder(
									photographer
								)}/${item.getThumbnail()}"
								alt="${item.data.alt}"
							/>
						</a>
						<div class="media-card__lower-body">
							<p class="media-card__title" lang="en">${item.data.alt}</p>
							<p class="media-card__price">${item.data.price} €</p>
							<p class="media-card__like">${item.data.likes}
								<span class="sr-only" lang="en">Likes</span>
								</p>
							<button aria-label="J'aime" class="media-card__like-button like-button background-element" data-target="${
								item.data.id
							}" tabIndex="0">
							<span class="fas fa-heart like-button" aria-hidden="true"></span>
							<span class="like-button sr-only">J'aime</span>
							</button>
							
						</div>
					</div>`;
					break;
			}
		template += `</div>`;
		return template;
	};
}
export default MediasGrid;



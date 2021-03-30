class PhotographerWidget {
	static init = (medias, photographer) => {
		const template = `<div class="photographer-widget">
				<span class="photographer-widget__likes-wrap">
					<p class="photographer-widget__likes-count">${this.getLikes(
						medias
					)}<span class="fas fa-heart photographer-widget__likes-icon" aria-hidden="true"></span><span class="sr-only" lang="en">Likes</span></p>
				</span>
				<span class="photographer-widget__price-wrap">${
					photographer.price
				}€ / jour</span>
			</div>`;
		return template;
	};
	static getLikes = (medias) => {
		let totalCount = 0;
		for (let media of medias) {
			totalCount += media.data.likes;
		}
		return totalCount;
	};
}
export default PhotographerWidget;

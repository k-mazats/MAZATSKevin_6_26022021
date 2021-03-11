class PhotographerWidget {
	static init = (medias, photographer) => {
		const template = `<div class="photographer-widget">
				<span class="photographer-widget__likes-wrap">
					<p class="photographer-widget__likes-count">${this.getLikes(
						medias
					)}<i class="fas fa-heart photographer-widget__likes-button"></i></p>
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

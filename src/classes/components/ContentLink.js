class ContentLink {
	static init = () => {
		const template = `<div class="content-link scroll-to-content">
				<a href="#app" class="content-link__anchor scroll-to-content">Passer au contenu</a>
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
export default ContentLink;

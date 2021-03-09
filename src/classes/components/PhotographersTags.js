class PhotographersTags {
	static init = (type, data) => {
		let items = ``;
		switch (type) {
			case "nav":
				for (let item of data) {
					items += `<li class="nav__item"><a class="nav__link router-link" href="../category/${item}">${item}</a></li>`;
				}
				return items;
			case "grid":
				for (let item of data) {
					items += `<li class="user__categories-item"><a href="../category/${item}" class="user__categories-link router-link">${item}</a></li>`;
				}
				return items;
		}
	};
}
export default PhotographersTags;

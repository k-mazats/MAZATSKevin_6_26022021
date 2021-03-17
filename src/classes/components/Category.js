class Category {
	static init = (type, data) => {
		let items = ``;
		switch (type) {
			case "nav":
				for (let item of data) {
					items += `<li class="nav__item"><a class="nav__link router-link" href="../category/${item}" lang="en">${item}</a></li>`;
				}
				return items;
			case "grid":
				for (let item of data) {
					items += `<li class="user__categories-item"><a href="../category/${item}" class="user__categories-link router-link background-element" lang="en">${item}</a></li>`;
				}
				return items;
			case "photographer":
				for (let item of data) {
					items += `<li class="photographer-infos__categories-item"><a href="../category/${item}" class="photographer-infos__categories-link router-link background-element" lang="en">${item}</a></li>`;
				}
				return items;
		}
	};
}
export default Category;

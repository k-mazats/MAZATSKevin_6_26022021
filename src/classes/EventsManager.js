class EventsManager {
	static watch = (router) => {
		document.addEventListener("click", (e) => {
			if (e.target.classList.contains("router-link")) {
				e.preventDefault();
				let target = this.hasTarget(e.target, "href");
				const href = target.getAttribute("href");
				const route = href.substring(2);
				this.onNavClick(route);
			}
			if (e.target.classList.contains("dropdown-button")) {
				let dropdownContent = document.getElementById("sortMediaList");
				dropdownContent.style.display = "block";
				dropdownContent.tabIndex = "0";
				dropdownContent.focus();
			}
			if (e.target.classList.contains("dropdown-content")) {
				let dropdownContent = document.getElementById("sortMediaList");
				dropdownContent.style.display = "none";
				dropdownContent.tabIndex = "-1";
			}
			if (e.target.classList.contains("modal-trigger")) {
				let target = this.hasTarget(e.target, "data-target");
				let modal = target.getAttribute("data-target");
				document.getElementById(modal).style.display = "flex";
			}
			if (e.target.classList.contains("modal-close")) {
				let target = this.hasTarget(e.target, "data-target");
				let modal = target.getAttribute("data-target");
				document.getElementById(modal).style.display = "none";
			}
		});
		window.onpopstate = () => {
			router.render(router.routes[window.location.pathname]);
		};
	};
	static onNavClick = (router, pathname) => {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		router.render(router.routes[pathname]);
	};
	static hasTarget = (elem, attr) => {
		if (elem.hasAttribute(attr) !== true) {
			let newElem = elem.parentNode;
			return this.hasTarget(newElem, attr);
		} else {
			return elem;
		}
	};
}
export default EventsManager
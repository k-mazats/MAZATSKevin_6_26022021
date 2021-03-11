import Photographer from "/src/classes/pages/Photographer.js";
class EventsManager {
	static watch = (router,store) => {
		document.addEventListener("click", (e) => {
			this.watchRouterLinks(e,router);
			this.watchDropdownButton(e);
			this.watchDropdownContent(e);
			this.watchModalTriggers(e);
			this.watchModalClosers(e);
			this.watchLikes(e,store,router);
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
	static watchRouterLinks = (e, router) => {
		if (e.target.classList.contains("router-link")) {
			e.preventDefault();
			let target = this.hasTarget(e.target, "href");
			const href = target.getAttribute("href");
			const route = href.substring(2);
			this.onNavClick(router, route);
		}
	};
	static watchDropdownButton = (e) => {
		if (e.target.classList.contains("dropdown-button")) {
			let dropdownContent = document.getElementById("sortMediaList");
			dropdownContent.style.display = "block";
			dropdownContent.tabIndex = "0";
			dropdownContent.focus();
		}
	};
	static watchDropdownContent = (e) => {
		if (e.target.classList.contains("dropdown-content")) {
			let dropdownContent = document.getElementById("sortMediaList");
			dropdownContent.style.display = "none";
			dropdownContent.tabIndex = "-1";
		}
	};
	static watchModalTriggers = (e) => {
		if (
			e.target.classList.contains("modal-trigger") &&
			!e.target.classList.contains("fas-heart")
		) {
			let target = this.hasTarget(e.target, "data-target");
			let modal = target.getAttribute("data-target");
			document.getElementById(modal).style.display = "flex";
		}
	};
	static watchModalClosers = (e) => {
		if (e.target.classList.contains("modal-close")) {
			let target = this.hasTarget(e.target, "data-target");
			let modal = target.getAttribute("data-target");
			document.getElementById(modal).style.display = "none";
		}
	};
	static watchLikes = (e,store,router) => {
		if (e.target.classList.contains("like-button")) {
			let target = this.hasTarget(e.target, "data-target");
			let media = target.getAttribute("data-target");
			store.addLike(media);
			const pathname = window.location.pathname.split("/");
			const id = parseInt(pathname[2]);
			router.routes[window.location.pathname] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id)
			);
			router.render(router.routes[window.location.pathname]);
		}
	}
}
export default EventsManager;

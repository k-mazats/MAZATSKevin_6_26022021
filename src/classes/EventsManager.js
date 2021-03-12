import Carousel from "/src/classes/Carousel.js";
import Photographer from "/src/classes/pages/Photographer.js";
class EventsManager {
	static watch = (router, store) => {
		document.addEventListener("click", (e) => {
			this.watchRouterLinks(e, router);
			this.watchDropdownButton(e);
			this.watchDropdownContent(e, store, router);
			this.watchModalTriggers(e);
			this.watchModalClosers(e);
			this.watchLikes(e, store, router);
			this.watchCarousel(e);
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
			const dropdownLi = document.getElementsByClassName("dropdown-content");
			const dropdownContent = document.getElementById("sortMediaList");
			dropdownContent.style.display = "block			";
			for (let content of dropdownLi) {
				content.tabIndex = "0";
			}
			dropdownLi[1].focus();
		}
	};
	static watchDropdownContent = (e, store, router) => {
		if (e.target.classList.contains("dropdown-content")) {
			e.preventDefault();
			const dropdownContent = document.getElementById("sortMediaList");
			dropdownContent.style.display = "none";
			dropdownContent.tabIndex = "-1";
			store.data.sortBy = e.target.innerHTML;
			const pathname = window.location.pathname.split("/");
			const id = parseInt(pathname[2]);
			router.routes[window.location.pathname] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id),
				store.data.sortBy
			);
			router.render(router.routes[window.location.pathname]);
		}
	};
	static sortMedias = (e) => {};
	static watchModalTriggers = (e) => {
		if (
			e.target.classList.contains("modal-trigger") &&
			!e.target.classList.contains("fas-heart")
		) {
			let target = this.hasTarget(e.target, "data-target");
			let modal = document.getElementById(target.getAttribute("data-target"));
			if (modal.id === "lightbox") {
				Carousel.startCarousel(target);
			}
			modal.style.display = "flex";
		}
	};
	static watchModalClosers = (e) => {
		if (e.target.classList.contains("modal-close")) {
			let target = this.hasTarget(e.target, "data-target");
			let modal = document.getElementById(target.getAttribute("data-target"));
			if (modal.id === "lightbox") {
				const carouselItems = document.getElementsByClassName(
					"carousel__image--active"
				);
				carouselItems[0].classList.remove("carousel__image--active");
			}
			modal.style.display = "none";
		}
	};
	static watchLikes = (e, store, router) => {
		if (e.target.classList.contains("like-button")) {
			// e.stopPropagation();
			let target = this.hasTarget(e.target, "data-target");
			let media = target.getAttribute("data-target");
			store.addLike(media);
			const pathname = window.location.pathname.split("/");
			const id = parseInt(pathname[2]);
			router.routes[window.location.pathname] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id),
				store.data.sortBy
			);
			router.render(router.routes[window.location.pathname]);
		}
	};
	static watchCarousel = (e) => {
		if (e.target.classList.contains("carousel-controls")) {
			e.preventDefault();
			let target = this.hasTarget(e.target, "href");
			Carousel.setActive(target.getAttribute("href"));
		}
	}
}
export default EventsManager;

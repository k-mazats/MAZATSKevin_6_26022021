import Carousel from "/src/classes/Carousel.js";
import Photographer from "/src/classes/pages/Photographer.js";
class EventsManager {
	constructor() {
		this.lastScrollPosition = 0;
	}
	static watch = (router, store) => {
		document.addEventListener("click", (e) => {
			this.watchRouterLinks(e, router);
			this.watchDropdownButton(e);
			this.watchDropdownContent(e, store, router);
			this.watchModalTriggers(e);
			this.watchModalClosers(e);
			this.watchLikes(e, store, router);
			this.watchCarousel(e);
			this.watchForm(e);
		});
		document.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				this.watchLikes(e, store, router);
			}
			if (e.key === "Escape") {
				this.closeDropdown(e);
				this.closeModals(e);
			}
			if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
				this.watchArrow(e);
			}
		});
		document.addEventListener("scroll", (e) => {
			this.watchContentLink();
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
	static watchContentLink = () => {
		if (document.querySelector(".user")) {
			let scrollPosition = window.scrollY;
			if (scrollPosition > this.lastScrollPosition) {
				document.querySelector(".scroll-to-content").style.display = "block";
			} else if (scrollPosition === 0) {
				document.querySelector(".scroll-to-content").style.display = "none";
			}
			this.lastScrollPosition = scrollPosition;
		}
	};
	static watchDropdownButton = (e) => {
		if (e.target.classList.contains("dropdown-button")) {
			document
				.getElementById("sortMediaButton")
				.setAttribute("aria-expanded", "true");
			const dropdownLi = document.getElementsByClassName("dropdown-content");
			const dropdownContent = document.getElementById("sortMediaList");
			dropdownContent.style.display = "block";
			for (let content of dropdownLi) {
				content.tabIndex = "0";
			}
			dropdownLi[1].focus();
		}
	};
	static watchDropdownContent = (e, store, router) => {
		if (e.target.classList.contains("dropdown-content")) {
			e.preventDefault();
			this.closeDropdown(e);
			store.data.sortBy = e.target.innerHTML;

			store.data.sortById = e.target.id;
			console.log(store.data.sortById);
			const pathname = window.location.pathname.split("/");
			const id = parseInt(pathname[2]);
			router.routes[window.location.pathname] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id),
				store.data.sortBy,
				store.data.sortById
			);
			router.render(router.routes[window.location.pathname]);
		}
	};
	static closeDropdown = (e) => {
		if (e.target.classList.contains("dropdown-content")) {
			const dropdownContent = document.getElementById("sortMediaList");
			const dropdownButton = document.querySelector(".dropdown-button");
			dropdownContent.style.display = "none";
			dropdownContent.tabIndex = "-1";
			document
				.getElementById("sortMediaButton")
				.setAttribute("aria-expanded", "false");
			dropdownButton.focus();
		}
	};
	static watchModalTriggers = (e) => {
		if (
			e.target.classList.contains("modal-trigger") &&
			!e.target.classList.contains("fas-heart")
		) {
			e.preventDefault();
			let target = this.hasTarget(e.target, "data-target");
			let modal = document.getElementById(target.getAttribute("data-target"));
			if (modal.id === "lightbox") {
				Carousel.startCarousel(target);
			}
			modal.style.display = "flex";
			let backgroundElements = document.getElementsByClassName(
				"background-element"
			);
			for (let element of backgroundElements) {
				element.setAttribute("tabindex", "-1");
			}
			document.body.style.overflowY = "hidden";
			this.lastFocus = e.target;

			document.querySelector(`.${modal.id}-modal__close`).focus();
		}
	};
	static watchModalClosers = (e) => {
		if (e.target.classList.contains("modal-close")) {
			e.preventDefault();
			this.closeModals();
		}
	};
	static closeModals = () => {
		const backgroundElements = document.getElementsByClassName(
			"background-element"
		);
		const modals = document.getElementsByClassName("modal");
		for (let modal of modals) {
			if (modal.style.display === "flex") {
				if (modal.id === "lightbox") {
					Carousel.closeCarousel();
				}
				modal.style.display = "none";
				for (let element of backgroundElements) {
					element.setAttribute("tabindex", "0");
				}
				this.giveFocusBack();
				document.body.style.overflowY = "scroll";
			}
		}
	};
	static giveFocusBack = () => {
		switch (this.lastFocus.getAttribute("data-target")) {
			case "lightbox":
				const triggers = document.querySelectorAll("a.media-card");
				for (let trigger of triggers) {
					if (
						trigger.getAttribute("data-id") ===
						this.lastFocus.getAttribute("data-id")
					) {
						trigger.focus();
					}
				}
				break;
			case "contact":
				document.querySelector(".photographer-infos__contact").focus();
				break;
		}
	};
	static watchLikes = (e, store, router) => {
		if (e.target.classList.contains("like-button")) {
			e.preventDefault();
			
 			let target = this.hasTarget(e.target, "data-target");
			let media = target.getAttribute("data-target");
			store.addLike(media);
			const pathname = window.location.pathname.split("/");
			const id = parseInt(pathname[2]);
			router.routes[window.location.pathname] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id),
				store.data.sortBy,
				store.data.sortById
			);
			router.render(router.routes[window.location.pathname]);
		}
	};
	static watchArrow = (e) => {
		if (document.getElementById("lightbox").style.display === "flex") {
			switch (e.key) {
				case "ArrowRight":
					Carousel.setActive("forward");
					break;
				case "ArrowLeft":
					Carousel.setActive("backward");
			}
		}
	};
	static watchCarousel = (e) => {
		if (e.target.classList.contains("carousel-controls")) {
			e.preventDefault();
			let target = this.hasTarget(e.target, "href");
			Carousel.setActive(target.getAttribute("href"));
		}
	};
	static watchForm = (e) => {
		if (e.target.classList.contains("contact-form__submit")) {
			e.preventDefault();
			const inputs = document.getElementsByClassName("contact-form__input");
			for (let input of inputs) {
				let name = input.id;
				let value = input.value;
				console.log(`${name}: ${value}`);
			}
		}
	};
}
export default EventsManager;

export default class Carousel {
	static startCarousel = (target) => {
		const carouselItems = document.getElementsByClassName("carousel__image");
		for (let image of carouselItems) {
			if (image.getAttribute("data-id") === target.getAttribute("data-id")) {
				image.classList.add("carousel__image--active");
				image.setAttribute("aria-hidden", "false");
			}
		}
		this.setName();
	};
	static setName = () => {
		document.querySelector(
			".lightbox-modal__title"
		).innerHTML = document
			.querySelector(".carousel__image--active")
			.getAttribute("data-name");
	};
	static setActive = (direction) => {
		const current = document.querySelector(".carousel__image--active");
		switch (direction) {
			case "forward":
				current.classList.remove("carousel__image--active");
				if (current.nextElementSibling !== null) {
					current.nextElementSibling.classList.add("carousel__image--active");
					current.nextElementSibling.setAttribute("aria-hidden", "false");
				} else {
					document
						.querySelector(".carousel__image")
						.classList.add("carousel__image--active");
					document
						.querySelector(".carousel__image")
						.setAttribute("aria-hidden", "false");
				}
				break;
			case "backward":
				current.classList.remove("carousel__image--active");
				if (current.previousElementSibling !== null) {
					current.previousElementSibling.classList.add("carousel__image--active");
					current.previousElementSibling.setAttribute("aria-hidden", "false");
				} else {
					document
						.querySelector(".carousel__image:last-of-type")
						.classList.add("carousel__image--active");
					document
						.querySelector(".carousel__image:last-of-type")
						.setAttribute("aria-hidden", "false");
				}
				break;
		}
		this.setName();
	};
	static closeCarousel = () => {
		const carouselItems = document.querySelector(".carousel__image--active");
		carouselItems.classList.remove("carousel__image--active");
		carouselItems.setAttribute("aria-hidden", "true");
	};
}

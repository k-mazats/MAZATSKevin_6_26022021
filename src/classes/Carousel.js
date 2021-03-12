export default class Carousel {
	static startCarousel = (target) => {
		const carouselItems = document.getElementsByClassName("carousel__image");
		for (let image of carouselItems) {
			if (image.getAttribute("data-id") === target.getAttribute("data-id")) {
				image.classList.add("carousel__image--active");
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
				} else {
					document
						.querySelector(".carousel__image")
						.classList.add("carousel__image--active");
				}
				break;
			case "backward":
				current.classList.remove("carousel__image--active");
				if (current.previousElementSibling !== null) {
					current.previousElementSibling.classList.add(
						"carousel__image--active"
					);
				} else {
					document
						.querySelector(".carousel__image:last-of-type")
						.classList.add("carousel__image--active");
				}
				break;
		}
		this.setName();
	};
}

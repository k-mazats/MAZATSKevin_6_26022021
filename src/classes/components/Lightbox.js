class Lightbox {
	static init = (data) => {
		const template = `<div class="lightbox-modal"  id="lightbox" hidden>
				<div class="lightbox-modal__wrap" id="lightbox">
				<button class="lightbox-modal__close modal-close" data-target="lightbox">X</button>
				<a href="" class="lightbox-modal__previous"><i class="fas fa-chevron-left"></i></a>
					<img
						src="img/Sample Photos/Mimi/Animals_Rainbow.jpg"
						alt=""
						class="lightbox-modal__img"
					/>
					<a href="" class="lightbox-modal__next"><i class="fas fa-chevron-right"></i></a>
					<div class="lightbox-modal__title-wrap">
						<p class="lightbox-modal__title">Arc en ciel</p>
					</div>
				</div>
			</div>`;
		return template;
	};
}
export default Lightbox;

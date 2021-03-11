import mediasFactory from "../mediasFactory.js";
export default class DataStore {
	constructor(data) {
		this.data = {
			photographers: data.photographers,
			media: mediasFactory(data.media),
			sortBy: "Popularité"
		};
	}
	getAllPhotographers = () => {
		return this.data.photographers;
	};
	getAllPhotographersId = () => {
		const photographersId = new Array();
		for (let photographer of this.data.photographers) {
			photographersId.push(photographer.id);
		}
		return photographersId;
	};
	getPhotographersByTag = (tag) => {
		const photographers = this.data.photographers;
		return photographers.filter((photographer) =>
			photographer.tags.includes(tag)
		);
	};
	getPhotographerById = (id) => {
		const photographers = this.data.photographers;
		const array = photographers.filter(
			(photographer) => photographer.id === id
		);
		const object = array[0];
		return object;
	};
	getAllMedias = () => {
		return this.data.media;
	};
	getMediaById = (id) => {
		const medias = this.getAllMedias();
		const array = medias.filter((media) => media.data.id === parseInt(id));
		const object = array[0];
		return object;
	};
	getMediasByPhotographerId = (id) => {
		const medias = this.getAllMedias();

		return medias.filter((media) => media.data.photographerId === id);
	};
	getMediasByTag = (tag) => {
		const medias = this.getAllMedias();
		return medias.filter((media) => media.data.tags.includes(tag));
	};
	getAllTags = () => {
		const tags = new Set();
		const iterDatas = [...this.data.photographers];
		for (let array of iterDatas) {
			for (let tag of array.tags) {
				tags.add(tag);
			}
		}
		return tags;
	};
	addLike = (id) => {
		const media = this.getMediaById(id);
		media.data.likes += 1;
	};
}

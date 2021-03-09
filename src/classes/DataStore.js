export default class DataStore {
	getDatas = async () => {
		const url = "/src/json/FishEyeDataFR.json";
		const response = await fetch(url);
		return response.json();
	};
	getAllPhotographers = async () => {
		const data = await this.getDatas();
		return data.photographers;
	};
	getAllPhotographersId = async () => {
		const data = await this.getDatas();
		const photographersId = new Array();
		for(let photographer of data.photographers){
			photographersId.push(photographer.id);
		}
		return photographersId;
	};
	getPhotographersByTag = async (tag) => {
		const data = await this.getDatas();
		const photographers = data.photographers;
		return photographers.filter((photographer) =>
			photographer.tags.includes(tag)
		);
	};
	getPhotographerById = async (id) => {
		const data = await this.getDatas();
		const photographers = data.photographers;
		return photographers.filter((photographer) => photographer.id === id);
	};
	getAllMedias = async () => {
		const data = await this.getDatas();
		return data.media;
	};
	getMediasByPhotographerId = async (id) => {
		const data = await this.getDatas();
		const medias = data.media;
		return medias.filter((media) => media.photographerId === id);
	};
	getMediasByTag = async (tag) => {
		const data = await this.getDatas();
		const medias = data.media;
		return medias.filter((media) => media.tags.includes(tag));
	};
	getAllTags = async (tag) => {
		const data = await this.getDatas();
		const tags = new Set();
		const iterDatas = [...data.photographers, ...data.media];
		for (let array of iterDatas) {
			for (let tag of array.tags) {
				tags.add(tag);
			}
		}

		return tags;
	};
}

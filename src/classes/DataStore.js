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
		return medias.filter((media) =>
			media.tags.includes(tag)
		);
	};
}

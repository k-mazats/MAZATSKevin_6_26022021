class Media {
	constructor(type, data) {
		this.type = type;
		this.data = data;
	}
}
class Image extends Media {
	constructor(data) {
		super("image", data);
	}
	getFolder = (data) => {
		const photographer = data.name;
		const index = photographer.indexOf(" ");
		const folder = photographer.substring(0, index).replace(/_|-/g, " "); 
		return folder;
	}
}
class Video extends Media {
	constructor(data) {
		super("video", data);
	}
	getFolder = (data) => {
		const photographer = data.name;
		const index = photographer.indexOf(" ");
		const folder = photographer.substring(0, index).replace(/_|-/g, " ");
		return folder;
	};
	getThumbnail = () => {
		const file = this.data.video;
		return `${file.substring(0,file.length - 3)}jpg`
	}
}
export {Image, Video };

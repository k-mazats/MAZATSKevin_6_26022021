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
	getName = () => {
		const fileName = this.data.image;
		const index = fileName.indexOf(".");
		const name = fileName.substring(0,index).replace(/_|-/g, " ");
		return name;
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
	getName = () => {
		const fileName = this.data.video;
		const index = fileName.indexOf(".");
		const name = fileName.substring(0, index).replace(/_|-/g, " ");
		return name;
	};
	getFolder = (data) => {
		const photographer = data.name;
		const index = photographer.indexOf(" ");
		const folder = photographer.substring(0, index).replace(/_|-/g, " ");
		return folder;
	};
}
export {Image, Video };

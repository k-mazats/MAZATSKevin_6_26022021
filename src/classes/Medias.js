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
		const fileName = this.data.image.replace(/_|-/g, " ");
		const indexExtension = fileName.indexOf(".");
		const indexName = fileName.indexOf(" ")
		const name = fileName.substring(indexName,indexExtension);
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
		const fileName = this.data.video.replace(/_|-/g, " ");
		const indexExtension = fileName.indexOf(".");
		const indexName = fileName.indexOf(" ");
		const name = fileName.substring(indexName, indexExtension);
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

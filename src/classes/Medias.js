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
		const tempName = fileName.substring(0,index);
		const name = tempName.replace(/_/g, " ");
		return name;
	}
	getFolder = (data) => {
		const photographer = data.name;
		const index = photographer.indexOf(" ");
		const folder = photographer.substring(0, index); 
		return folder;
	}
}
class Video extends Media {
	constructor(data) {
		super("video", data);
	}
}
export {Image, Video };

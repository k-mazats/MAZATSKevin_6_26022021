"use strict";

const fs = require("fs");
const path = require("path");
// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const extractFrame = require("ffmpeg-extract-frame");
(() => {
	try {
	const arrayOfFiles = fs.readdirSync("./");
	for (let file of arrayOfFiles) {
		if (fs.lstatSync(file).isDirectory()) {
			let directoryContent = fs.readdirSync(file);
			for (let media of directoryContent) {
				if (path.extname(media) === ".mp4") {
					
						let command = new ffmpeg(`./${file}/${media}`).takeScreenshots(
							{
								count: 1,
								timemarks: ["1"], // number of seconds
								filename: `${media.substring(0, media.length - 4)}.jpg`,
							},
							`./${file}/`,
							function (err) {
								console.log("screenshots were saved");
							}
						);
						
						// new ffmpeg(`./${file}/${media}`).screenshots({
						// 	timestamps: [0],
						// 	filename: `${media.substring(0, media.length - 4)}.jpg`,
						// 	folder: `./${file}`,
						// 	size: "320x240",
						// })
					
				}
			}
		}
	}
} catch (e) {
	console.log(e);
}
})();

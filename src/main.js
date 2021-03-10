import Router from "/src/classes/Router.js";
import DataStore from "/src/classes/DataStore.js";

import Home from "/src/classes/pages/Home.js";
import Photographer from "/src/classes/pages/Photographer.js";
import Error from "/src/classes/pages/Error.js";



(async () => {
	const store = new DataStore();
	const selector = "router-link";
	const app = document.getElementById("app");

	//
	// routes creation
	//

	//statics routes
	const staticsRoutes = {
		"/": Home.init(await store.getAllTags(), await store.getAllPhotographers()),
		"/index.html": Home.init(
			await store.getAllTags(),
			await store.getAllPhotographers()
		),
		"/error": Error.init(),
	};
	//dynamic routes
	const addDynRoutes = async (ids, tags) => {
		const response = {};
		for (let id of ids) {
			response[`/photographer/${id}`] = Photographer.init(
				await store.getPhotographerById(id),
				await store.getMediasByPhotographerId(id)
			);
		}
		for (let tag of tags) {
			response[`/category/${tag}`] = Home.init(
				await store.getAllTags(),
				await store.getPhotographersByTag(tag)
			);
		}
		return response;
	};
	const dynRoutes = await addDynRoutes(
		await store.getAllPhotographersId(),
		await store.getAllTags(),
		store
	);
	//merging
	const routes = { ...staticsRoutes, ...dynRoutes };

	//
	// router start
	//

	const router = new Router(app, selector, routes);

})();

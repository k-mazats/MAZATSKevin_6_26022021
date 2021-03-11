import getDatas from "/src/getDatas.js";

import DataStore from "/src/classes/DataStore.js";
import Router from "/src/classes/Router.js";
import EventsManager from "/src/classes/EventsManager.js";

import Home from "/src/classes/pages/Home.js";
import Photographer from "/src/classes/pages/Photographer.js";
import Error from "/src/classes/pages/Error.js";



(async () => {
	const store = new DataStore(await getDatas());
	
	const app = document.getElementById("app");

	//
	// routes creation
	//

	//statics routes
	const staticsRoutes = {
		"/": Home.init(store.getAllTags(), store.getAllPhotographers()),
		"/index.html": Home.init(
			store.getAllTags(),
			store.getAllPhotographers()
		),
		"/error": Error.init(),
	};
	//dynamic routes
	const addDynRoutes = async (ids, tags) => {
		const response = {};
		for (let id of ids) {
			response[`/photographer/${id}`] = Photographer.init(
				store.getPhotographerById(id),
				store.getMediasByPhotographerId(id)
			);
		}
		for (let tag of tags) {
			response[`/category/${tag}`] = Home.init(
				store.getAllTags(),
				store.getPhotographersByTag(tag)
			);
		}
		return response;
	};
	const dynRoutes = await addDynRoutes(
		store.getAllPhotographersId(),
		store.getAllTags(),
		store
	);
	//merging
	const routes = { ...staticsRoutes, ...dynRoutes };

	//
	// router start
	//

	const router = new Router(app, routes);


	//
	// listen for events
	//
	
	const events = EventsManager.watch(router,store);
})();

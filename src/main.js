import Router from "/src/classes/Router.js";
import DataStore from "/src/classes/DataStore.js";

import Home from "/src/classes/components/Home.js";
import Error from "/src/classes/components/Error.js";

(async () => {
	const store = new DataStore();
	const selector = "router-link";
	const app = document.getElementById("app");

	const routes = {
		"/": Home.init(await store.getAllPhotographers()),
		"/index.html": Home.init(await store.getAllPhotographers()),
		"/photographer/195": Home.init(await store.getPhotographerById(195)),
		"/category/events": Home.init(await store.getPhotographersByTag("events")),
		"/error": Error.init(),
	};
	const router = new Router(app, selector, routes);

})();

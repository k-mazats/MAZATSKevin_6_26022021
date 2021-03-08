import Router from "/src/classes/Router.js";
import DataStore from "/src/classes/DataStore.js";

import home from "/src/components/home.js";
import about from "/src/components/about.js";
import contact from "/src/components/contact.js";
import error from "/src/components/error.js";

(async () => {
	const selector = "router-link";
	const app = document.getElementById("app");
	const routes = {
		"/": home.init(),
		"/index.html": home.init(),
		"/contact": contact.init(),
		"/about": about.init(),
		"/error": error.init(),
	};
	const router = new Router(app, selector, routes);

	const store = new DataStore();

	console.log(await store.getAllPhotographers());
	console.log(await store.getPhotographersByTag("events"));
	console.log(await store.getPhotographerById(195));
})();

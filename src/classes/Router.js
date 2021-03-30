export default class Router {
	constructor(app, routes) {
		this.app = app;
		this.routes = routes;
		this.render(routes[window.location.pathname]);
	}
	render = (component) => {
		if (component !== undefined) {
			app.innerHTML = component;
		} else {
			app.innerHTML = this.routes["/error"];
		}
		document.querySelector(".header").focus();
		window.scrollTo(0, 0);
	};
}
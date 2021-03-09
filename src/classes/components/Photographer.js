class Photographer {
	static init = (data) => {
		const template = `<div class="row h-100">
			<div class="col-12 bg-secondary">${this.loop(data)}</div>
			</div>`;
		return template;
	};
	static loop = (datas) => {
		let response = [];
		for (let data of datas) {
			response.push(`${JSON.stringify(data)}<br /><br />`);
		}
		return response;
	};
}
export default Photographer;

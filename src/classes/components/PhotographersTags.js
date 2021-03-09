class PhotographersTags {
	static init = (data) => {
		
		let items = ``;
		for(let item of data){
			items += `<li class="user__categories-item"><a href="../category/${item}" class="user__categories-link router-link">${item}</a></li>`;
		}
		return items;
	};
}
export default PhotographersTags;

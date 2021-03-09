class Nav {
	static init = (data) => {
		
		let items = ``;
		for(let item of data){
			items += `<li class="nav__item"><a class="nav__link router-link" href="../category/${item}">${item}</a></li>`;
		}
		return items;
	};
}
export default Nav;

import Category from "/src/classes/components/Category.js";
class PhotographersGrid {
	static init = (data) => {
		
		let items = ``;
		for(let item of data){
			items += `<div class="user">
					<a href="../photographer/${item.id}" class="user__link router-link">
						<img
							class="user__img router-link"
							src="../img/Sample Photos/Photographers ID Photos/${item.portrait}"
							alt=""
						/>
						<h2 class="user__name router-link">${item.name}</h2>
					</a>
					<div class="user__infos">
						<span class="user__infos-location">
							<p>${item.city}</p>
						</span>
						<span class="user__infos-catchphrase">
							<p>${item.tagline}</p>
						</span>
						<span class="user__infos-price">
							<p>${item.price} €</p>
						</span>
					</div>
					<div class="user__categories">
						<ul class="user__categories-list">
							<li class="user__categories-item">
								${Category.init("grid",item.tags)}
							</li>
						</ul>
					</div>
				</div>`;
		}
		return items;
	};
}
export default PhotographersGrid;


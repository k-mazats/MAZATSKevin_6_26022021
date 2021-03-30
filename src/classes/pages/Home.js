import Category from "/src/classes/components/Category.js";
import ContentLink from "/src/classes/components/ContentLink.js";
import PhotographersGrid from "/src/classes/components/PhotographersGrid.js";
class Home {
	static init = (tags, photographers) => {
		const template = `<header class="header">
				<a href="../" class="header__link router-link">
					<img
						src="../img/logo-fisheye.png"
						lang="en"
						alt="Fisheye Homepage"
						class="header__img router-link"
					/>
				</a>
			</header>
			<nav aria-label="Photographer Categories" class="nav" lang="en">
				<ul class="nav__list">
					${Category.init("nav",tags)}
				</ul>
			</nav>
			${ContentLink.init()}
			<h1 class="page-title">Nos photographes</h1>
			<section class="section">
			${PhotographersGrid.init(photographers)}
				
			</section>`;
		return template;
	};
}
export default Home;

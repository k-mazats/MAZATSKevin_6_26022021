import Nav from "/src/classes/components/Nav.js";
import PhotographersGrid from "/src/classes/components/PhotographersGrid.js";
class Home {
	static init = (tags, photographers) => {
		const template = `<header role="banner" class="header">
				<a href="../" class="header__link router-link">
					<img
						src="../img/logo-fisheye.png"
						alt="Fisheye Homepage"
						class="header__img router-link"
					/>
				</a>
			</header>
			<nav aria-label="Photographer categories" class="nav">
				<ul class="nav__list">
					${Nav.init(tags)}
				</ul>
			</nav>
			<h1 class="page-title">Nos photographes</h1>
			<section class="section">
			${PhotographersGrid.init(photographers)}
				
			</section>`;
		return template;
	};
}
export default Home;

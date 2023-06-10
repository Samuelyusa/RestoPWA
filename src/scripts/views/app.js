import DrawerInitiator from '../utils/drawer-initiator';
import UpButtonInitiator from '../utils/up-button-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
	constructor({
		button, drawer, content, upArrow,
	}) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;
		this._upArrow = upArrow;

		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});

		UpButtonInitiator.init({
			upArrow: this._upArrow,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];

		const loaderContainer = document.querySelector('.loaderContainer');
		try {
			this._content.innerHTML = await page.render();
			await page.afterRender();

			const skipLinkElem = document.querySelector('.skip-link');
			skipLinkElem.addEventListener('click', (event) => {
				event.preventDefault();
				document.querySelector('#mainContent').focus();
			});

			setTimeout(() => {
				loaderContainer.style.display = 'none';
			}, 2000);
		} catch (error) {
			console.error(error);
			return document.body.innerHTML = `
            <div class="Page404">
                <h1>404 Page Not Found</h1>
                <p>
                    Oops! It seems like the page you're looking for cannot be found.
                </p>
                <a href="/">Go back home</a>
            </div>
            `;
		}
	}
}

export default App;

import DrawerInitiator from '../utils/drawer-initiator';
import UpButtonInitiator from '../utils/up-button-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content, upArrow }) {
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
    
        // kita bisa menginisiasikan komponen lain bila ada
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];

        const loader__container = document.querySelector('.loader__container');
        const loader = document.querySelector('.loader');
        const loaderMessage = document.querySelector('#loaderMessage');

        try {
            this._content.innerHTML = await page.render();
            await page.afterRender();

            setTimeout(function() {
                loader__container.style.display = 'none';
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
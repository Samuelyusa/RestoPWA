class HeroComp extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="hero"></div>`;
    }
}

customElements.define('hero-comp', HeroComp);
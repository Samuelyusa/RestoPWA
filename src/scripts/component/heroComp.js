class HeroComp extends HTMLElement {
	connectedCallback() {
		this.src = this.getAttribute('src') || '';
		this.alt = this.getAttribute('alt') || 'Restaurant Catalogue Main Image';
		this.render();
	}

	render() {
		this.innerHTML = `
            <img
                id="hero"
                src="${this.src}"
				alt="${this.alt}">
            </img>
            `;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
		this.render();
	}

	static get observedAttributes() {
		return ['src', 'alt'];
	}
}

customElements.define('hero-comp', HeroComp);

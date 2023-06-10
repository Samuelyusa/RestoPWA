class HeroComp extends HTMLElement {
	connectedCallback() {
		this.src = this.getAttribute('src') || '';
		this.render();
	}

	render() {
		this.innerHTML = `
            <img
                id="hero"
                src="${this.src}">
            </img>
            `;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
		this.render();
	}

	static get observedAttributes() {
		return ['src'];
	}
}

customElements.define('hero-comp', HeroComp);

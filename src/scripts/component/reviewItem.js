/* eslint-disable no-tabs */
class ReviewItem extends HTMLElement {
	set review(review) {
		this._review = review;
		this.render();
	}

	render() {
		this.innerHTML = `
            <div tabindex="0" class="restaurant__author">${this._review.name}</div>
            <div tabindex="0" class="restaurant__timestamp">${this._review.date}</div>
            <div tabindex="0" class="restaurant__message">${this._review.review}</div>
        `;
	}
}
customElements.define('review-item', ReviewItem);

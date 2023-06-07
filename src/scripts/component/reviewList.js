import './reviewItem.js';

class ReviewList extends HTMLElement {
    set reviews(reviews) {
        this._reviews = reviews;
        this.render();
    }

    renderError(message){
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    
    render() {
        this._innerHTML = '';
        this._reviews.forEach(review => {
            const reviewItemElement = document.createElement('review-item');
            reviewItemElement.review = review;
            this.appendChild(reviewItemElement);
        });
    }

}
customElements.define('review-list', ReviewList);
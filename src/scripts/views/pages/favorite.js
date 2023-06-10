import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createrestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
	async render() {
		return `
        <div class="content">
            <h2 tabindex="0" class="content__heading">Favorites</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
	},

	async afterRender() {
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
		const FavContainer = document.querySelector('.content');
		const restaurantsContainer = document.querySelector('#restaurants');

		const heroImage = document.querySelector('hero-comp');
		heroImage.setAttribute('style', 'display:none');

		if (restaurants.length !== 0) {
			restaurants.forEach((restaurant) => {
				restaurantsContainer.innerHTML += createrestaurantItemTemplate(restaurant);
			});
		} else {
			const restaurantMessage = document.createElement('div');
			restaurantMessage.classList.add('restaurant__emptyMessage');
			FavContainer.appendChild(restaurantMessage);
			const message = document.createElement('p');
			message.innerHTML = 'No favorite restaurants have been added yet.<br>Add a Favorite Restaurant by pressing the thumbs up button.';
			restaurantMessage.appendChild(message);
		}
	},
};

export default Favorite;

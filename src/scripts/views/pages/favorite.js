import RestaurantAPISource from "../../data/restaurant-source";
import { createrestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Favorites</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
    },
    
    async afterRender() {
        const restaurants = await RestaurantAPISource.Favorite();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createrestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;
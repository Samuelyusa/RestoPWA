import RestaurantAPISource from "../../data/restaurant-source";
import { createrestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="content">
            <h2 tabindex="0" class="content__heading">Home</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
    },
    
    async afterRender() {
        const restaurants = await RestaurantAPISource.Home();
        const restaurantsContainer = document.querySelector('#restaurants');
            restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createrestaurantItemTemplate(restaurant);
            });
    },
};

export default Home;
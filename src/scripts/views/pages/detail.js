import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurant-source';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
        `;
    },
    
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAPISource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);
    },
};

export default Detail;
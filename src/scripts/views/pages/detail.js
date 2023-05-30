import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurant-source';
import { createrestaurantDetailTemplate  } from '../templates/template-creator'; 
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
        `;
    },
    
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAPISource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);
        
        const categoriesContainer = document.querySelector('.tag__categories');
        const Categories = restaurant.categories;
        for (let number in Categories ) {
            categoriesContainer.innerHTML += `<div class="tag">${Categories[number].name}</div>`;
        }

        const foodContainer = document.querySelector('.restaurant__food');
        const food = restaurant.menus.foods;
        for (let number in food ) {
            foodContainer.innerHTML += `
            <div class="food__item">
                    <h4>${food[number].name}</h4>
            </div>`;
        }

        const drinkContainer = document.querySelector('.restaurant__drink');
        const drink = restaurant.menus.drinks;

        for (let number in drink ) {
            drinkContainer.innerHTML += `
            <div class="drink__item">
                    <h4>${drink[number].name}</h4>
            </div>`;
        }

        const reviewContainer = document.querySelector('.restaurant__reviews');
        const review = restaurant.customerReviews;

        for (let number in review ) {
            reviewContainer.innerHTML += `
            <div class="restaurant__comment">
                <div class="restaurant__author">${review[number].name}</div>
                <div class="restaurant__timestamp">${review[number].date}</div>
                <div class="restaurant__message">${review[number].review}</div>
            </div>
            `;
        }

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant,
            // : {
                // id: restaurant.id,
                // name: restaurant.name,
                // description: restaurant.description,
                // city: restaurant.city,
                // address: restaurant.address,
                // pictureId: restaurant.pictureId,
                // categories: restaurant.categories,
                // menus: restaurant.menus,
                // rating: restaurant.rating,
                // customerReviews: restaurant.customerReviews.name,
                // customerReviewsReview: restaurant.customerReviews.review,
                // customerReviews: restaurant.customerReviews.name,
            // },
        });
        
    },
};

export default Detail;
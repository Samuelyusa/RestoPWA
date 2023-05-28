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
        
        const categoriesContainer = document.querySelector('.restaurant__categories');
        const Categories = restaurant.categories;
        for (let number in Categories ) {
            categoriesContainer.innerHTML += `<span class="categories">${Categories[number].name} </span>`;
        }

        const foodContainer = document.querySelector('.restaurant__food');
        const food = restaurant.menus.foods;
        for (let number in food ) {
            foodContainer.innerHTML += `<p>${food[number].name}. </p>`;
        }

        const drinkContainer = document.querySelector('.restaurant__drink');
        const drink = restaurant.menus.drinks;

        for (let number in drink ) {
            drinkContainer.innerHTML += `<p>${drink[number].name}. </p>`;
        }

        const reviewContainer = document.querySelector('.restaurant__reviews');
        const review = restaurant.customerReviews;

        for (let number in review ) {
            reviewContainer.innerHTML += `
            <div class="review__container review_container_shadow">
                <div class="review__name">
                    <span>${review[number].name}</span>
                </div>
                <div class="review__content">
                    <p>${review[number].review}<p>
                </div>
                <div class="review__date">
                    <p>${review[number].date}<p>
                </div>
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
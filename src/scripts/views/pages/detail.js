import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurant-source';
import { createrestaurantDetailTemplate, createReviewTemplate  } from '../templates/template-creator'; 
import LikeButtonInitiator from '../../utils/like-button-initiator';
import API_ENDPOINT from '../../globals/api-endpoint';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
        <div id="restaurant__review"></div>
        <div id="likeButtonContainer"></div>
        `;
    },
    
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAPISource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        const ReviewContainer = document.querySelector('#restaurant__review');


        
        restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);
        ReviewContainer.innerHTML = createReviewTemplate(restaurant);


        
        const categoriesContainer = document.querySelector('.tag__categories');
        const Categories = restaurant.categories;
        for (let number in Categories ) {
            categoriesContainer.innerHTML += `<div tabindex="0" class="tag">${Categories[number].name}</div>`;
        }

        const foodContainer = document.querySelector('.restaurant__food');
        const food = restaurant.menus.foods;
        for (let number in food ) {
            foodContainer.innerHTML += `
            <div class="food__item">
                    <h4 tabindex="0">${food[number].name}</h4>
            </div>`;
        }

        const drinkContainer = document.querySelector('.restaurant__drink');
        const drink = restaurant.menus.drinks;

        for (let number in drink ) {
            drinkContainer.innerHTML += `
            <div class="drink__item">
                    <h4 tabindex="0">${drink[number].name}</h4>
            </div>`;
        }

        const reviewContainer = document.querySelector('.restaurant__reviews');
        const review = restaurant.customerReviews;

        for (let number in review ) {
            reviewContainer.innerHTML += `
            <div class="restaurant__comment">
                <div tabindex="0" class="restaurant__author">${review[number].name}</div>
                <div tabindex="0" class="restaurant__timestamp">${review[number].date}</div>
                <div tabindex="0" class="restaurant__message">${review[number].review}</div>
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

        const submitBtn = document.querySelector('#submit-btn');
        submitBtn.addEventListener('click', (event) => {
            // event.preventDefault();

            const RestoId = restaurant.id;
            const reviewName = document.querySelector('#addReviewName').value;
            const reviewText = document.querySelector('#addReviewText').value;
            const errorMsg = document.querySelector('#errorMessage');
            
            validateReview(RestoId, reviewName, reviewText, errorMsg);
        });
        
        function validateReview(id, name,review,error){
            if (name === '' || review === '') {
                error.textContent  = "Name and Review cannot be empty";
            } else {
                error.textContent = '';
                postReview(id, name, review);
            }
        };

        function postReview(RestoId,reviewName,reviewText) {
            const data = {
                id: RestoId,
                name: reviewName,
                review: reviewText,
            };

            fetch(API_ENDPOINT.ADD_REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    console.log("Data sent successfully!");
                    addReview(reviewName, reviewText)
                } else {
                    console.error("Failed to send data. Error code:", response.status);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        };

        function addReview(name, review) {

            const date = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);

            const reviewList = document.querySelector('.restaurant__reviews');
            const newReview = document.createElement('div');
            newReview.classList.add('restaurant__comment');
            newReview.innerHTML = `
                <div tabindex="0" class="restaurant__author">${name}</div>
                <div tabindex="0" class="restaurant__timestamp">${formattedDate}</div>
                <div tabindex="0" class="restaurant__message">${review}</div>
            `;
            reviewList.appendChild(newReview);

            document.querySelector('#addReviewName').value = '';
            document.querySelector('#addReviewText').value = '';
        }
    },
};

export default Detail;
import CONFIG from '../../globals/config';

const createrestaurantDetailTemplate = (restaurant) => `
    <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="Restaurant Image" class="restaurant__poster"/>

    <div class="restaurant__details">
        <h1 tabindex="0" class="restaurant__name">${restaurant.name}</h1>
        <p  tabindex="0"class="restaurant__address">${restaurant.address}, ${restaurant.city}</p>
        <p tabindex="0" class="restaurant__rating">
        <span>
            <img src="${CONFIG.ICON}/star-rate.png" style="vertical-align: bottom;" />
        </span>
        ${restaurant.rating} / 5</p>

        <div class="tag__categories">
        </div>

        <div class="restaurant__subTitle">
            <h2 tabindex="0">Description</h2>
        </div>
        <div class="restaurant__description">
            <p tabindex="0">${restaurant.description}</p>
        </div>

        <div class="restaurant__subTitle">
            <h2 tabindex="0">Menu</h2>
        </div>

        <div class="restaurant__subTitle">
            <h3 tabindex="0">Culinary Perfection</h3>
        </div>
        <div class="restaurant__menu">
            <div class="restaurant__food"></div>
        </div>

        <div class="restaurant__subTitle">
            <h3 tabindex="0">Our Delightful Drinks</h3>
        </div>
        <div class="restaurant__menu">
            <div class="restaurant__drink"></div>
        </div>

        <div class="restaurant__subTitle">
            <h2 tabindex="0">Customer Experiences</h2>
        </div>
        
        <div class="restaurant__reviews"></div>


    </div>
`;

const createrestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <span><img src="${CONFIG.ICON}/star-rate.png" class="star-rate"></span><span class="restaurant-item__header__rating__score">${restaurant.rating}</span>
        </div>
        </div>
        <div class="restaurant-item__content">
        <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </button>
`;


export {
    createrestaurantItemTemplate,
    createrestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
    static async Home() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
    
    static async Favorite() {
        const response = await fetch(API_ENDPOINT.FAVORITE);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
    
    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    // static async CategoriesRestaurant(id) {
    //     const response = await fetch(API_ENDPOINT.DETAIL(id));
    //     const responseJson = await response.json();
    //     console.log(responseJson);
    //     const string = responseJson.
    //     const categories = responseJson.restaurant.categories;
    //     console.log(categories);

    //     categories.forEach((num) => {
    //         console.log(categories[num]);
    //     })
    //     // return responseJson.Categories;
    // }
}

export default RestaurantAPISource;
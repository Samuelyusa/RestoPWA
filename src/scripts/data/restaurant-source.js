/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-tabs */
import { async } from 'regenerator-runtime';
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
		try {
			const response = await fetch(API_ENDPOINT.DETAIL(id));
			const responseJson = await response.json();

			// console.log(response.status);

			if (response.status === 404) {
				throw new Error('Page not found');
			} else {
				return responseJson.restaurant;
			}
		} catch (error) {
			console.error(error);
			return document.body.innerHTML = `
            <div class="Page404">
                <h1>404 Page Not Found</h1>
                <p>
                    Oops! It seems like the page you're looking for cannot be found.
                </p>
                <a href="/">Go back home</a>
            </div>
            `;
		}
	}
}

export default RestaurantAPISource;

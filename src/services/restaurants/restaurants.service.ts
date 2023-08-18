//@ts-ignore - camelize is not a module
import camelize from "camelize";
import { IRawRestaurant } from "../../interfaces/restaurant";
import { mockImages, mocks } from "./mock";
import { IResRestaurantRequest } from "./restaurants.type";

export const restaurantsTransform = ({
	results = [],
}: {
	results: IRawRestaurant[];
}) => {
	const mappedResults = results.map((restaurant: IRawRestaurant) => {
		restaurant.photos = restaurant.photos.map(() => {
			return mockImages[
				Math.ceil(Math.random() * (mockImages.length - 1))
			];
		});

		return {
			...restaurant,
			isClosedTemporarily:
				restaurant.business_status === "CLOSED_TEMPORARILY",
			isOpenNow:
				restaurant.opening_hours && restaurant.opening_hours.open_now,
			address: restaurant.vicinity,
			rating: restaurant.rating || 0,
		};
	});

	return camelize(mappedResults);
};

export const restaurantsRequest = (
	location = "37.7749295,-122.4194155",
): Promise<IResRestaurantRequest> => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];

		if (!mock) {
			reject("not found");
		}

		resolve(mock);
	});
};

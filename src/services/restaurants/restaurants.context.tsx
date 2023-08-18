import React, { createContext, useEffect, useState } from "react";
import { IRestaurant } from "../../interfaces/restaurant";
import {
	restaurantsRequest,
	restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext<{
	restaurants: IRestaurant[];
	isLoading: boolean;
	error: any;
}>({
	restaurants: [],
	isLoading: false,
	error: null,
});

export const RestaurantsContextProvider = ({
	children,
}: {
	children: JSX.Element;
}) => {
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);

	const retrieveRestaurants = () => {
		setIsLoading(true);
		setTimeout(() => {
			restaurantsRequest()
				.then(restaurantsTransform)
				.then((results) => {
					setRestaurants(results);
				})
				.catch((err) => {
					setError(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 2000);
	};

	useEffect(() => {
		retrieveRestaurants();
	}, []);

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};

import React, { createContext, useContext, useEffect, useState } from "react";
import { IRestaurant } from "../../interfaces/restaurant";
import { LocationContext } from "../location/location.context";
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
	const { location } = useContext(LocationContext);

	const retrieveRestaurants = (loc: string) => {
		setIsLoading(true);
		setRestaurants([]);

		setTimeout(() => {
			restaurantsRequest(loc)
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
		if (location) {
			const locationString = `${location?.lat},${location?.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

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

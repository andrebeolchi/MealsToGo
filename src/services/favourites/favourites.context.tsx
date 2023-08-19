import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

import { IRestaurant } from "../../interfaces/restaurant";
import {
	IFavouritesContext,
	IFavouritesContextProps,
} from "./favourites.context.types";

export const FavouritesContext = createContext<IFavouritesContext>({
	favourites: [],
	addToFavourites: () => null,
	removeFromFavourites: () => null,
});

export const FavouritesContextProvider = ({
	children,
}: IFavouritesContextProps) => {
	const [favourites, setFavourites] = useState<IRestaurant[]>([]);

	const saveFavourites = async (value: IRestaurant[]) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("@favourites", jsonValue);
		} catch (e) {
			console.log("Error storing", e);
		}
	};

	const loadFavourites = async () => {
		try {
			const value = await AsyncStorage.getItem("@favourites");

			if (value !== null) {
				setFavourites(JSON.parse(value));
			}
		} catch (e) {
			console.log("Error loading", e);
		}
	};

	const add = (restaurant: IRestaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const remove = (restaurant: IRestaurant) => {
		const newFavourites = favourites.filter(
			(x) => x.placeId !== restaurant.placeId,
		);

		setFavourites(newFavourites);
	};

	useEffect(() => {
		loadFavourites();
	}, []);

	useEffect(() => {
		saveFavourites(favourites);
	}, [favourites]);

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				addToFavourites: add,
				removeFromFavourites: remove,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
};

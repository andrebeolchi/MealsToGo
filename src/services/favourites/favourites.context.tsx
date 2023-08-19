import React, { createContext, useState } from "react";
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

	const add = (restaurant: IRestaurant) => {
		setFavourites([...favourites, restaurant]);
	};

	const remove = (restaurant: IRestaurant) => {
		const newFavourites = favourites.filter(
			(x) => x.placeId !== restaurant.placeId,
		);

		setFavourites(newFavourites);
	};

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

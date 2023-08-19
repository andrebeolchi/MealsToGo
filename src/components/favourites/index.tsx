import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { IRestaurant } from "../../interfaces/restaurant";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./index.styles";

export const Favourite = ({ restaurant }: { restaurant: IRestaurant }) => {
	const { favourites, addToFavourites, removeFromFavourites } =
		useContext(FavouritesContext);

	const isFavourite = favourites.find(
		(r) => r.placeId === restaurant.placeId,
	);
	return (
		<FavouriteButton
			onPress={() =>
				!isFavourite
					? addToFavourites(restaurant)
					: removeFromFavourites(restaurant)
			}
		>
			<AntDesign
				name={isFavourite ? "heart" : "hearto"}
				size={24}
				color={isFavourite ? "red" : "white"}
			/>
		</FavouriteButton>
	);
};

import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./index.styles";

export const Favourite = () => {
	const { favourites, addToFavourites, removeFromFavourites } =
		useContext(FavouritesContext);

	return (
		<FavouriteButton>
			<AntDesign name="heart" size={24} color="red" />
		</FavouriteButton>
	);
};

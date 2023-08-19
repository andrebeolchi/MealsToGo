import { IRestaurant } from "../../interfaces/restaurant";

export interface IFavouritesContext {
	favourites: IRestaurant[];
	addToFavourites: (restaurant: IRestaurant) => void;
	removeFromFavourites: (restaurant: IRestaurant) => void;
}

export interface IFavouritesContextProps {
	children: React.ReactNode;
}

import { RouteProp } from "@react-navigation/native";
import { IRestaurant } from "../../../interfaces/restaurant";

export type TRestaurantsNavigatorParamList = {
	Restaurants: undefined;
	RestaurantDetail: { restaurant: IRestaurant };
};

export type RestaurantsScreenRouteProp = RouteProp<
	TRestaurantsNavigatorParamList,
	"Restaurants"
>;

export type RestaurantDetailScreenRouteProp = RouteProp<
	TRestaurantsNavigatorParamList,
	"RestaurantDetail"
>;

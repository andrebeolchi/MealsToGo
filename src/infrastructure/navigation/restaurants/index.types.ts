import { RouteProp } from "@react-navigation/native";

export type TRestaurantsNavigatorParamList = {
	Restaurants: undefined;
};

export type RestaurantsScreenRouteProp = RouteProp<
	TRestaurantsNavigatorParamList,
	"Restaurants"
>;

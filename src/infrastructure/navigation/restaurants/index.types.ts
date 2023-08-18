import { RouteProp } from "@react-navigation/native";

export type TRestaurantsNavigatorParamList = {
	Restaurants: undefined;
	RestaurantDetail: { restaurant: any };
};

export type RestaurantsScreenRouteProp = RouteProp<
	TRestaurantsNavigatorParamList,
	"Restaurants"
>;

export type RestaurantDetailScreenRouteProp = RouteProp<
	TRestaurantsNavigatorParamList,
	"RestaurantDetail"
>;

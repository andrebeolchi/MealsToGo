import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantDetailsScreen } from "../../../features/restaurants/screens/restaurant-details";
import { RestaurantsScreen } from "../../../features/restaurants/screens/restaurants";
import { TRestaurantsNavigatorParamList } from "./index.types";

const RestaurantStack =
	createNativeStackNavigator<TRestaurantsNavigatorParamList>();

export default function RestaurantsNavigator() {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "slide_from_bottom",
			}}
			initialRouteName="Restaurants"
		>
			<RestaurantStack.Screen
				name="Restaurants"
				component={RestaurantsScreen}
			/>

			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetailsScreen}
			/>
		</RestaurantStack.Navigator>
	);
}

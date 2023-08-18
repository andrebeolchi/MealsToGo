import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../../features/restaurants/screens/restaurant-screen";
import { TRestaurantsNavigatorParamList } from "./index.types";

const RestaurantStack =
	createNativeStackNavigator<TRestaurantsNavigatorParamList>();

export default function RestaurantsNavigator() {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<RestaurantStack.Screen
				name="Restaurants"
				component={RestaurantsScreen}
			/>
		</RestaurantStack.Navigator>
	);
}

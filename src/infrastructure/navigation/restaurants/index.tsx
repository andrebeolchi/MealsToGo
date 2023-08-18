import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text } from "../../../components/text";
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
			initialRouteName="Restaurants"
		>
			<RestaurantStack.Screen
				name="Restaurants"
				component={RestaurantsScreen}
			/>

			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={() => <Text>Restaurant Detail</Text>}
			/>
		</RestaurantStack.Navigator>
	);
}

import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant-screen";
import { theme } from "../theme";
import { TAppNavigatorParamList, TTabIcons } from "./app.navigator.types";

const Tab = createBottomTabNavigator<TAppNavigatorParamList>();

const TAB_ICON: TTabIcons = {
	Restaurants: "restaurant",
	Map: "map",
	Settings: "settings",
};

const TAB_ICON_OUTLINE: TTabIcons = {
	Restaurants: "restaurant-outline",
	Map: "map-outline",
	Settings: "settings-outline",
};

const createScreenOptions = ({
	route,
}: {
	route: { name: keyof TAppNavigatorParamList };
}) => {
	const iconName = TAB_ICON[route.name];
	const iconNameOutline = TAB_ICON_OUTLINE[route.name];

	return {
		tabBarIcon: ({
			focused,
			size,
			color,
		}: {
			focused: boolean;
			size: number;
			color: string;
		}) => (
			<Ionicons
				name={focused ? iconName : iconNameOutline}
				size={size}
				color={color}
			/>
		),
		tabBarActiveTintColor: theme.colors.brand.primary,
	};
};

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen name="Restaurants" component={RestaurantsScreen} />
				<Tab.Screen name="Map" component={RestaurantsScreen} />
				<Tab.Screen name="Settings" component={RestaurantsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
	Oswald_400Regular,
	useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

export type RootNavigatorParamList = {
	Restaurants: undefined;
	Map: undefined;
	Settings: undefined;
};

const Tab = createBottomTabNavigator<RootNavigatorParamList>();

const TAB_ICON: {
	[key: string]: keyof typeof Ionicons.glyphMap;
} = {
	Restaurants: "restaurant",
	Map: "map",
	Settings: "settings",
};

const createScreenOptions = ({
	route,
}: {
	route: { name: keyof RootNavigatorParamList };
}) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }: { size: number; color: string }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

export default function App() {
	const [robotoLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!robotoLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator screenOptions={createScreenOptions}>
						<Tab.Screen
							name="Restaurants"
							component={RestaurantsScreen}
						/>
						<Tab.Screen name="Map" component={RestaurantsScreen} />
						<Tab.Screen
							name="Settings"
							component={RestaurantsScreen}
						/>
					</Tab.Navigator>
				</NavigationContainer>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}

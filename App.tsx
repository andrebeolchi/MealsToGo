import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
	Oswald_400Regular,
	useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

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
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}

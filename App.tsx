import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";

import {
	Oswald_400Regular,
	useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

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
				<SafeArea>
					<RestaurantsScreen />
				</SafeArea>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}

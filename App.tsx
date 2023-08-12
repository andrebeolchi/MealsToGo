import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";
import { paperTheme, theme } from "./src/infrastructure/theme";

import {
	RobotoCondensed_400Regular,
	useFonts as useRoboto,
} from "@expo-google-fonts/roboto-condensed";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { PaperProvider } from "react-native-paper";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export default function App() {
	const [robotoLoaded] = useRoboto({
		RobotoCondensed_400Regular,
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
				<PaperProvider theme={paperTheme}>
					<SafeArea>
						<RestaurantsScreen />
					</SafeArea>
					<ExpoStatusBar style="auto" />
				</PaperProvider>
			</ThemeProvider>
		</>
	);
}

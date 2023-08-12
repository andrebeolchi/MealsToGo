import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";
import { theme } from "./src/infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export default function App() {
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

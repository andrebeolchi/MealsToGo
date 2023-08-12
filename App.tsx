import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export default function App() {
	return (
		<>
			<SafeArea>
				<RestaurantsScreen />
			</SafeArea>
			<ExpoStatusBar style="auto" />
		</>
	);
}

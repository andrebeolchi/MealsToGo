import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen";

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<RestaurantsScreen />
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	search: {
		padding: 16,
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: "blue",
	},
});

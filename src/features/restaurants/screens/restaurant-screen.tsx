import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const onChangeSearch = (query: string) => setSearchQuery(query);

	return (
		<>
			<View style={styles.search}>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</View>
			<View style={styles.list}>
				<RestaurantInfoCard />
			</View>
		</>
	);
};

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

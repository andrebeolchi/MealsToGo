import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
	padding: 16px;
`;

const ResturantListContainer = styled(View)`
	flex: 1;
	padding: 16px;
	background-color: blue;
`;

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const onChangeSearch = (query: string) => setSearchQuery(query);

	return (
		<>
			<SearchContainer>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
			</SearchContainer>
			<ResturantListContainer>
				<RestaurantInfoCard />
			</ResturantListContainer>
		</>
	);
};

import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

const SearchContainer = styled(View)`
	padding: ${(props: DefaultTheme) => props.theme.space[3]};
	background-color: ${(props: DefaultTheme) => props.theme.colors.bg.primary};
`;

const ResturantListContainer = styled(View)`
	flex: 1;
	padding: ${(props: DefaultTheme) => props.theme.space[3]};
	background-color: ${(props: DefaultTheme) => props.theme.colors.bg.primary};
`;

const Search = styled(Searchbar)`
	background-color: ${(props: DefaultTheme) =>
		props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const onChangeSearch = (query: string) => setSearchQuery(query);

	return (
		<>
			<SearchContainer>
				<Search
					elevation={1}
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

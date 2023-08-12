import React, { useState } from "react";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";
import { ResturantListContainer, Search, SearchContainer } from "./styles";

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

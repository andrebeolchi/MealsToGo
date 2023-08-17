import React, { useState } from "react";
import { Spacer } from "../../../../components/spacer";
import { IRestaurant } from "../../../../interfaces/restaurant";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";
import { RestaurantList, Search, SearchContainer } from "./styles";

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
			<RestaurantList
				data={[
					{
						name: "Some Restaurant",
						icon: "https://picsum.photos/300/200",
						photos: [
							"https://picsum.photos/200/300",
							"https://picsum.photos/200/300",
						],
						address: "100 some random street",
						isOpenNow: true,
						rating: 4,
						isClosedTemporarily: false,
					},
				]}
				renderItem={({ item }: { item: IRestaurant }) => (
					<Spacer position="bottom" size="small">
						<RestaurantInfoCard restaurant={item} />
					</Spacer>
				)}
				keyExtractor={(item: IRestaurant) => item.name}
			/>
		</>
	);
};

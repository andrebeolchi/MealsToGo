import React, { useContext } from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { IRestaurant } from "../../../../interfaces/restaurant";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";
import { RestaurantList, Search, SearchContainer } from "./styles";

import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
	const { restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			<SearchContainer>
				<Search />
			</SearchContainer>
			<RestaurantList
				data={restaurants}
				renderItem={({ item }: { item: IRestaurant }) => {
					console.log(item);

					return (
						<Spacer position="bottom" size="medium">
							<RestaurantInfoCard restaurant={item} />
						</Spacer>
					);
				}}
				keyExtractor={(item: IRestaurant) => item.name}
			/>
		</SafeArea>
	);
};

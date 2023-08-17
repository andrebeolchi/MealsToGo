import React, { useContext } from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { IRestaurant } from "../../../../interfaces/restaurant";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";
import { RestaurantList, Search, SearchContainer } from "./styles";

import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
	const restaurantContext = useContext(RestaurantsContext);

	return (
		<SafeArea>
			<SearchContainer>
				<Search />
			</SearchContainer>
			<RestaurantList
				data={restaurantContext.restaurants}
				renderItem={({ item }: { item: IRestaurant }) => (
					<Spacer position="bottom" size="medium">
						<RestaurantInfoCard />
					</Spacer>
				)}
				keyExtractor={(item: IRestaurant) => item.name}
			/>
		</SafeArea>
	);
};

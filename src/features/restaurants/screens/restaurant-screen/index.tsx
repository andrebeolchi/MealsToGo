import React, { useContext } from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";

import { colors } from "../../../../infrastructure/theme/colors";

import { IRestaurant } from "../../../../interfaces/restaurant";

import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { Loading, LoadingContainer, RestaurantList } from "./styles";
import { Search } from "../../components/search";

export const RestaurantsScreen = () => {
	const { isLoading, restaurants } = useContext(RestaurantsContext);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating color={colors.brand.primary} />
				</LoadingContainer>
			)}
			<Search />
			<RestaurantList
				data={restaurants}
				renderItem={({ item }: { item: IRestaurant }) => {
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

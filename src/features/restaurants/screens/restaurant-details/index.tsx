import React from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { RestaurantDetailScreenRouteProp } from "../../../../infrastructure/navigation/restaurants/index.types";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";

export const RestaurantDetailsScreen = ({
	route,
}: {
	route: RestaurantDetailScreenRouteProp;
}) => {
	const { restaurant } = route.params;

	return (
		<SafeArea>
			<Spacer position="horizontal" size="small">
				<RestaurantInfoCard restaurant={restaurant} />
			</Spacer>
		</SafeArea>
	);
};

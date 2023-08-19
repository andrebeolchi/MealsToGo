import React from "react";
import { CompactRestaurantInfo } from "../../../../components/restaurant/compact-restaurant-info";
import { IRestaurant } from "../../../../interfaces/restaurant";

export default function MapCallout({
	restaurant,
}: {
	restaurant: IRestaurant;
}) {
	return <CompactRestaurantInfo restaurant={restaurant} />;
}

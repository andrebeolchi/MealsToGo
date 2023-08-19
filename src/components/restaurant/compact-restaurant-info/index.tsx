import React from "react";
import { Platform } from "react-native";

import { IRestaurant } from "../../../interfaces/restaurant";
import { Text } from "../../text";
import { CompactImage, CompactWebView, Item } from "./index.styled";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({
	restaurant,
	isMap,
}: {
	restaurant: IRestaurant;
	isMap?: boolean;
}) => {
	const Image = isAndroid && isMap ? CompactWebView : CompactImage;

	return (
		<Item>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Text variant="caption">{restaurant.name}</Text>
		</Item>
	);
};

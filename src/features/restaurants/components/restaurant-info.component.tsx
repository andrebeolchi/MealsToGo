import React from "react";
import { Text } from "react-native-paper";

interface RestaurantInfoProps {
	restaurant: {
		name: string;
		icon: string;
		photos: string[];
		address: string;
		openingHours: string;
		rating: number;
		isClosedTemporarily: boolean;
	};
}

export const RestaurantInfo = ({ restaurant = {} }: RestaurantInfoProps) => {
	const {
		name = "Some Restaurant",
		icon,
		photos = [
			"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;

	return <Text>{name}</Text>;
};

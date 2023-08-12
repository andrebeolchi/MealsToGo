import React from "react";
import { Card } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";

interface RestaurantInfoCardProps {
	restaurant: {
		name: string;
		icon: string;
		photos: string[];
		address: string;
		isOpenNow: boolean;
		rating: number;
		isClosedTemporarily: boolean;
	};
}

const RestaurantCard = styled(Card)`
	background-color: ${(props: DefaultTheme) =>
		props.theme.colors.bg.secondary};
`;

const RestaurantCardTitle = styled(Card.Title)`
	color: ${(props: DefaultTheme) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({
	restaurant = {
		name: "Some Restaurant",
		icon: "",
		photos: [
			"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
		address: "100 some random street",
		isOpenNow: true,
		rating: 4,
		isClosedTemporarily: true,
	},
}: RestaurantInfoCardProps) => {
	const {
		name,
		icon,
		photos,
		address,
		isOpenNow,
		rating,
		isClosedTemporarily,
	} = restaurant;

	return (
		<RestaurantCard elevation={4}>
			<Card.Cover key={name} source={{ uri: photos[0] }} />
			<RestaurantCardTitle title={name} />
		</RestaurantCard>
	);
};

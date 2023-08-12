import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/start";
import { RestaurantInfoCardProps } from "./types";
import { Address, Info, Rating, RestaurantCard, Title } from "./styles";

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

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<RestaurantCard elevation={4}>
			<Card.Cover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>

				<Rating>
					{ratingArray.map((_, index) => (
						<SvgXml key={index} xml={star} width={20} height={20} />
					))}
				</Rating>

				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
};

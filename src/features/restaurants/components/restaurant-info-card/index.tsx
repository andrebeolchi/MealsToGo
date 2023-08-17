import React from "react";
import { Image, Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import open from "../../../../../assets/open";
import star from "../../../../../assets/start";
import { Spacer } from "../../../../components/spacer";
import {
	Address,
	Info,
	Rating,
	RestaurantCard,
	Section,
	SectionEnd,
	Title,
} from "./styles";
import { IconProps, RestaurantInfoCardProps } from "./types";

const Star = ({ width, height }: IconProps) => (
	<SvgXml xml={star} width={width} height={height} />
);
const Open = ({ width, height }: IconProps) => (
	<SvgXml xml={open} width={width} height={height} />
);

export const RestaurantInfoCard = ({
	restaurant = {
		name: "Some Restaurant",
		icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
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

				<Section>
					<Rating>
						{ratingArray.map((_, index) => (
							<Star key={index} width={20} height={20} />
						))}
					</Rating>

					<SectionEnd>
						{isClosedTemporarily && (
							<Text style={{ color: "red" }}>
								CLOSED TEMPORARILY
							</Text>
						)}
						<Spacer position={"left"} size={"small"} />
						{isOpenNow && <Open width={20} height={20} />}
						<Spacer position={"left"} size={"small"} />
						<Image
							style={{ width: 20, height: 20 }}
							source={{ uri: icon }}
						/>
					</SectionEnd>
				</Section>

				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
};

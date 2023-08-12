import React from "react";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled, { DefaultTheme } from "styled-components/native";
import star from "../../../../assets/start";

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
	background-color: ${(props: { theme: DefaultTheme }) =>
		props.theme.colors.bg.secondary};
`;

const Info = styled.View`
	padding: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

const Title = styled(Text)`
	font-family: ${(props: { theme: DefaultTheme }) =>
		props.theme.fonts.heading};
	font-size: ${(props: { theme: DefaultTheme }) =>
		props.theme.fontSizes.body};
	color: ${(props: { theme: DefaultTheme }) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
	font-family: ${(props: { theme: DefaultTheme }) => props.theme.fonts.body};
	font-size: ${(props: { theme: DefaultTheme }) =>
		props.theme.fontSizes.caption};
	color: ${(props: { theme: DefaultTheme }) => props.theme.colors.ui.primary};
`;

const Rating = styled.View`
	flex-direction: row;
	align-items: center;
	padding-top: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
	padding-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
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

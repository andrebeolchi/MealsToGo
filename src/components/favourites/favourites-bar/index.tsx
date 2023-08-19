import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { IRestaurant } from "../../../interfaces/restaurant";
import { CompactRestaurantInfo } from "../../restaurant/compact-restaurant-info";
import { Spacer } from "../../spacer";
import { Text } from "../../text";
import { FavouritesWrapper } from "./index.styles";

export const FavouritesBar = ({
	favourites,
	onNavigate,
}: {
	favourites: IRestaurant[];
	onNavigate: (restaurant: IRestaurant) => void;
}) => {
	if (!favourites.length) {
		return null;
	}

	return (
		<FavouritesWrapper>
			<Spacer position="top" size="medium">
				<Spacer position="left" size="medium">
					<Text variant="caption">Favourites</Text>
				</Spacer>
			</Spacer>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map((restaurant: IRestaurant) => {
					const key = restaurant.name;

					return (
						<Spacer key={key} position="left" size="medium">
							<TouchableOpacity
								onPress={() => onNavigate(restaurant)}
							>
								<CompactRestaurantInfo
									restaurant={restaurant}
								/>
							</TouchableOpacity>
						</Spacer>
					);
				})}
			</ScrollView>
		</FavouritesWrapper>
	);
};

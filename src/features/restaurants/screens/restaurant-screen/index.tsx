import React, { useContext } from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";

import { colors } from "../../../../infrastructure/theme/colors";

import { IRestaurant } from "../../../../interfaces/restaurant";

import { NavigationProp } from "@react-navigation/native";
import { Pressable } from "react-native";
import { TRestaurantsNavigatorParamList } from "../../../../infrastructure/navigation/restaurants/index.types";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { Search } from "../../components/search";
import { Loading, LoadingContainer, RestaurantList } from "./styles";

export const RestaurantsScreen = ({
	navigation,
}: {
	navigation: NavigationProp<TRestaurantsNavigatorParamList>;
}) => {
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
						<Pressable
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item,
								})
							}
						>
							<Spacer position="bottom" size="medium">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</Pressable>
					);
				}}
				keyExtractor={(item: IRestaurant) => item.name}
			/>
		</SafeArea>
	);
};

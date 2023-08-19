import React, { useContext, useState } from "react";

import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";

import { colors } from "../../../../infrastructure/theme/colors";

import { IRestaurant } from "../../../../interfaces/restaurant";

import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../../components/favourites/favourites-bar";
import { TRestaurantsNavigatorParamList } from "../../../../infrastructure/navigation/restaurants/index.types";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { Search } from "../../components/search";
import { Loading, LoadingContainer, RestaurantList } from "./styles";

export const RestaurantsScreen = ({
	navigation,
}: {
	navigation: NavigationProp<TRestaurantsNavigatorParamList>;
}) => {
	const { isLoading, restaurants } = useContext(RestaurantsContext);
	const { favourites } = useContext(FavouritesContext);
	const [isToggled, setIsToggled] = useState<boolean>(false);

	return (
		<SafeArea>
			{isLoading && (
				<LoadingContainer>
					<Loading size={50} animating color={colors.brand.primary} />
				</LoadingContainer>
			)}
			<Search
				onFavouritesToggle={() => setIsToggled(!isToggled)}
				isFavouritesToggled={isToggled}
			/>
			{isToggled && (
				<FavouritesBar
					favourites={favourites}
					onNavigate={(restaurant: IRestaurant) =>
						navigation.navigate("RestaurantDetail", {
							restaurant,
						})
					}
				/>
			)}
			<RestaurantList
				data={restaurants}
				renderItem={({ item }: { item: IRestaurant }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", {
									restaurant: item,
								})
							}
						>
							<Spacer position="bottom" size="medium">
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item: IRestaurant) => item.name}
			/>
		</SafeArea>
	);
};

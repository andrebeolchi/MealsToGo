import React, { useState } from "react";
import { List } from "react-native-paper";

import { ScrollView } from "react-native";
import { SafeArea } from "../../../../components/safe-area";
import { Spacer } from "../../../../components/spacer";
import { RestaurantDetailScreenRouteProp } from "../../../../infrastructure/navigation/restaurants/index.types";
import { RestaurantInfoCard } from "../../components/restaurant-info-card";

export const RestaurantDetailsScreen = ({
	route,
}: {
	route: RestaurantDetailScreenRouteProp;
}) => {
	const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
	const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
	const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
	const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);

	const { restaurant } = route.params;

	return (
		<SafeArea>
			<Spacer position="horizontal" size="small">
				<Spacer position="bottom" size="medium">
					<RestaurantInfoCard restaurant={restaurant} />
				</Spacer>
			</Spacer>

			<ScrollView>
				<List.Accordion
					title="Breakfast"
					left={(props) => (
						<List.Icon {...props} icon="bread-slice" />
					)}
					expanded={breakfastExpanded}
					onPress={() => setBreakfastExpanded(!breakfastExpanded)}
				>
					<List.Item title="Eggs Benedict" />
					<List.Item title="Classic Breakfast" />
				</List.Accordion>

				<List.Accordion
					title="Lunch"
					left={(props) => <List.Icon {...props} icon="hamburger" />}
					expanded={lunchExpanded}
					onPress={() => setLunchExpanded(!lunchExpanded)}
				>
					<List.Item title="Sandwich" />
					<List.Item title="Burger" />
					<List.Item title="Soup" />
				</List.Accordion>

				<List.Accordion
					title="Dinner"
					left={(props) => (
						<List.Icon {...props} icon="food-variant" />
					)}
					expanded={dinnerExpanded}
					onPress={() => setDinnerExpanded(!dinnerExpanded)}
				>
					<List.Item title="Pasta with Meatballs" />
					<List.Item title="Steak" />
					<List.Item title="Noodles and Rice" />
				</List.Accordion>

				<List.Accordion
					title="Drinks"
					left={(props) => <List.Icon {...props} icon="cup" />}
					expanded={drinksExpanded}
					onPress={() => setDrinksExpanded(!drinksExpanded)}
				>
					<List.Item title="Coffee" />
					<List.Item title="Tea" />
					<List.Item title="Modelo" />
					<List.Item title="Coke" />
					<List.Item title="Fanta" />
				</List.Accordion>
			</ScrollView>
		</SafeArea>
	);
};

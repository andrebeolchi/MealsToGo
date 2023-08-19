import { NavigationProp } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Callout, Marker } from "react-native-maps";
import { TAppNavigatorParamList } from "../../../../infrastructure/navigation/app/index.types";
import { LocationContext } from "../../../../services/location/location.context";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import MapCallout from "../../components/map-callout";
import { Search } from "../../components/search";
import { Map } from "./index.styles";

export const MapScreen = ({
	navigation,
}: {
	navigation: NavigationProp<TAppNavigatorParamList>;
}) => {
	const { location } = useContext(LocationContext);
	const { restaurants = [] } = useContext(RestaurantsContext);

	const [latDelta, setLatDelta] = useState<number>(0);

	const { viewport, lat, lng } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;

		setLatDelta(northeastLat - southwestLat);
	}, [location, viewport]);

	return (
		<>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{restaurants.map((restaurant) => {
					return (
						<Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng,
							}}
						>
							<Callout
								onPress={() =>
									navigation.navigate("RestaurantDetail", {
										restaurant,
									})
								}
							>
								<MapCallout restaurant={restaurant} />
							</Callout>
						</Marker>
					);
				})}
			</Map>
		</>
	);
};

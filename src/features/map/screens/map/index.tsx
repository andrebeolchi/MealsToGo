import React from "react";
import MapView from "react-native-maps";
import { SafeArea } from "../../../../components/safe-area";

export const MapScreen = () => {
	return (
		<SafeArea>
			<MapView style={{ height: "100%", width: "100%" }} />
		</SafeArea>
	);
};

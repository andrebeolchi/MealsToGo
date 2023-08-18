import { Ionicons } from "@expo/vector-icons";

export type TAppNavigatorParamList = {
	Restaurants: undefined;
	Map: undefined;
	Settings: undefined;
};

export type TTabIcons = {
	[key: string]: keyof typeof Ionicons.glyphMap;
};

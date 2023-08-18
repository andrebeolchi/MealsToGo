import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TRestaurantsNavigatorParamList } from "../restaurants/index.types";

export type TTabIcons = {
	[key: string]: keyof typeof Ionicons.glyphMap;
};

export type TAppNavigatorParamList = {
	RestaurantsNavigator: TRestaurantsNavigatorParamList;
	Map: undefined;
	Settings: undefined;
};

export type AppNavigatorProp = CompositeNavigationProp<
	BottomTabNavigationProp<TAppNavigatorParamList>,
	NativeStackNavigationProp<TRestaurantsNavigatorParamList>
>;

export type RestaurantsScreenRouteProp = RouteProp<
	TAppNavigatorParamList,
	"RestaurantsNavigator"
>;

export type MapScreenRouteProp = RouteProp<TAppNavigatorParamList, "Map">;

export type SettingsScreenRouteProp = RouteProp<
	TAppNavigatorParamList,
	"Settings"
>;

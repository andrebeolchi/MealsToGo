import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";

export const SearchContainer = styled(View)`
	padding: ${(props: DefaultTheme) => props.theme.space[3]};
	background-color: ${(props: DefaultTheme) => props.theme.colors.bg.primary};
`;

export const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const Search = styled(Searchbar)`
	background-color: ${(props: DefaultTheme) =>
		props.theme.colors.bg.secondary};
`;

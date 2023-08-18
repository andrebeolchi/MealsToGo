import { FlatList, View } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";

export const SearchContainer = styled(View)`
	padding: ${(props: DefaultTheme) => props.theme.space[3]};
	background-color: ${(props: DefaultTheme) => props.theme.colors.bg.primary};
`;

export const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})`` as typeof FlatList;

export const Search = styled(Searchbar)`
	background-color: ${(props: DefaultTheme) =>
		props.theme.colors.bg.secondary};
`;

export const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

export const LoadingContainer = styled(View)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

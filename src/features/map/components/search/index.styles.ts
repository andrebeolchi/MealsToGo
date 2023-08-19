import { Searchbar } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";

export const SearchContainer = styled.View`
	padding: ${(props: DefaultTheme) => props.theme.space[3]};
	position: absolute;
	z-index: 999;
	top: 40px;
	width: 100%;
`;
export const SearchBar = styled(Searchbar)`
	background-color: ${(props: DefaultTheme) =>
		props.theme.colors.bg.secondary};
` as typeof Searchbar;

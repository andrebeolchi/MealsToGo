import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled, { DefaultTheme } from "styled-components/native";

export const RestaurantCard = styled(Card)`
	background-color: ${(props: { theme: DefaultTheme }) =>
		props.theme.colors.bg.secondary};
`;

export const Info = styled.View`
	padding: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

export const Title = styled(Text)`
	font-family: ${(props: { theme: DefaultTheme }) =>
		props.theme.fonts.heading};
	font-size: ${(props: { theme: DefaultTheme }) =>
		props.theme.fontSizes.body};
	color: ${(props: { theme: DefaultTheme }) => props.theme.colors.ui.primary};
`;

export const Address = styled(Text)`
	font-family: ${(props: { theme: DefaultTheme }) => props.theme.fonts.body};
	font-size: ${(props: { theme: DefaultTheme }) =>
		props.theme.fontSizes.caption};
	color: ${(props: { theme: DefaultTheme }) => props.theme.colors.ui.primary};
`;

export const Rating = styled.View`
	flex-direction: row;
	align-items: center;
	padding-top: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
	padding-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

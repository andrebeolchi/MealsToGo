import styled, { DefaultTheme } from "styled-components/native";

export const TopSmall = styled.View`
	margin-top: ${(props: { theme: DefaultTheme }) => props.theme.space[1]};
`;

export const TopMedium = styled.View`
	margin-top: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const TopLarge = styled.View`
	margin-top: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

export const RightSmall = styled.View`
	margin-right: ${(props: { theme: DefaultTheme }) => props.theme.space[1]};
`;

export const RightMedium = styled.View`
	margin-right: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const RightLarge = styled.View`
	margin-right: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

export const BottomSmall = styled.View`
	margin-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[1]};
`;

export const BottomMedium = styled.View`
	margin-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const BottomLarge = styled.View`
	margin-bottom: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

export const LeftSmall = styled.View`
	margin-left: ${(props: { theme: DefaultTheme }) => props.theme.space[1]};
`;

export const LeftMedium = styled.View`
	margin-left: ${(props: { theme: DefaultTheme }) => props.theme.space[2]};
`;

export const LeftLarge = styled.View`
	margin-left: ${(props: { theme: DefaultTheme }) => props.theme.space[3]};
`;

import styled, { DefaultTheme } from "styled-components/native";
import { SpacerProps, TPosition, TSize } from "./types";

const sizeVariant = {
	small: 2,
	medium: 3,
	large: 4,
};

const positionVariant = {
	top: "marginTop",
	left: "marginLeft",
	right: "marginRight",
	bottom: "marginBottom",
};

const getVariant = (position: TPosition, size: TSize, theme: DefaultTheme) => {
	const sizeIndex = sizeVariant[size];
	const property = positionVariant[position];
	const value = theme.space[sizeIndex];

	return `${property}: ${value}`;
};
export const Spacer: React.FunctionComponent<SpacerProps> = styled.View`
	${({
		position,
		size,
		theme,
	}: {
		position: TPosition;
		size: TSize;
		theme: DefaultTheme;
	}) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
	position: "top",
	size: "small",
};

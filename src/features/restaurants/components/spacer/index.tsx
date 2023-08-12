import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
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

export const SpacerView = styled.View`
	${({ variant }: { variant: string }) => variant};
`;

export const Spacer = ({ position, size }: SpacerProps) => {
	const theme = useTheme();
	const variant = getVariant(position, size, theme);

	return <SpacerView variant={variant} />;
};

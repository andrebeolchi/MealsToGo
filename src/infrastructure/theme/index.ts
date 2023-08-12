import { MD3LightTheme } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { DefaultTheme } from "styled-components/native";
import { colors } from "./colors";
import { fontSizes, fontWeights, fonts } from "./fonts";
import { sizes } from "./sizes";
import { lineHeights, space } from "./spacing";

export const theme: DefaultTheme = {
	colors,
	space,
	lineHeights,
	sizes,
	fonts,
	fontSizes,
	fontWeights,
};

export const paperTheme: ThemeProp = {
	...MD3LightTheme,
	fonts: {
		bodyLarge: {
			...MD3LightTheme.fonts.bodyLarge,
			fontFamily: fonts.body,
		},
		bodyMedium: {
			...MD3LightTheme.fonts.bodyMedium,
			fontFamily: fonts.body,
		},
		bodySmall: {
			...MD3LightTheme.fonts.bodySmall,
			fontFamily: fonts.body,
		},
		default: {
			...MD3LightTheme.fonts.default,
			fontFamily: fonts.body,
		},
		displayLarge: {
			...MD3LightTheme.fonts.displayLarge,
			fontFamily: fonts.heading,
		},
		displayMedium: {
			...MD3LightTheme.fonts.displayMedium,
			fontFamily: fonts.heading,
		},
		displaySmall: {
			...MD3LightTheme.fonts.displaySmall,
			fontFamily: fonts.heading,
		},
		headlineLarge: {
			...MD3LightTheme.fonts.headlineLarge,
			fontFamily: fonts.heading,
		},
		headlineMedium: {
			...MD3LightTheme.fonts.headlineMedium,
			fontFamily: fonts.heading,
		},
		headlineSmall: {
			...MD3LightTheme.fonts.headlineSmall,
			fontFamily: fonts.heading,
		},
		labelLarge: {
			...MD3LightTheme.fonts.labelLarge,
			fontFamily: fonts.heading,
		},
		labelMedium: {
			...MD3LightTheme.fonts.labelMedium,
			fontFamily: fonts.heading,
		},
		labelSmall: {
			...MD3LightTheme.fonts.labelSmall,
			fontFamily: fonts.heading,
		},
		titleLarge: {
			...MD3LightTheme.fonts.titleLarge,
			fontFamily: fonts.heading,
		},
		titleMedium: {
			...MD3LightTheme.fonts.titleMedium,
			fontFamily: fonts.heading,
		},
		titleSmall: {
			...MD3LightTheme.fonts.titleSmall,
			fontFamily: fonts.heading,
		},
	},
};

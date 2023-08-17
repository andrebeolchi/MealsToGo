export interface SpacerProps {
	position: TPosition;
	size: TSize;
	children?: React.ReactNode;
}

export type TSizeVariant = {
	small: number;
	medium: number;
	large: number;
};
export type TSize = keyof TSizeVariant;

export type TPositionVariant = {
	top: string;
	left: string;
	right: string;
	bottom: string;
};
export type TPosition = keyof TPositionVariant;

export type TTextVariant = "body" | "label" | "caption" | "error" | "hint";

export interface ITextProps {
	variant: TTextVariant;
	children: React.ReactNode;
}

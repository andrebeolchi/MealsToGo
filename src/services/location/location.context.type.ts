import { ILocation } from "./location.service.type";

export interface ILocationContext {
	isLoading: boolean;
	error: any;
	location: ILocation | null;
	search: (searchKeyword: string) => void;
}

export interface ILocationContextProps {
	children: React.ReactNode;
}

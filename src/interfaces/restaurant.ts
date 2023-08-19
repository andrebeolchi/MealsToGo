import { IGeometry } from "../services/location/location.service.type";

export interface IRestaurant {
	name: string;
	icon: string;
	photos: string[];
	address: string;
	isOpenNow: boolean;
	rating: number;
	isClosedTemporarily: boolean;
	placeId: string;
	geometry: IGeometry;
}

export interface Location {
	lat: number;
	lng: number;
}

export interface Viewport {
	northeast: Location;
	southwest: Location;
}

export interface Geometry {
	location: Location;
	viewport: Viewport;
}

export interface OpeningHours {
	open_now: boolean;
}

export interface IRawRestaurant {
	business_status: string;
	geometry: Geometry;
	icon: string;
	name: string;
	opening_hours: OpeningHours;
	photos: String[];
	place_id: string;
	rating: number;
	reference: string;
	user_ratings_total: number;
	vicinity: string;
}

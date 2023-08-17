export interface IRestaurant {
	name: string;
	icon: string;
	photos: string[];
	address: string;
	isOpenNow: boolean;
	rating: number;
	isClosedTemporarily: boolean;
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

export interface Photo {
	height: number;
	html_attributions: string[];
	photo_reference: string;
	width: number;
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
	photos: Photo[];
	place_id: string;
	rating: number;
	reference: string;
	user_ratings_total: number;
	vicinity: string;
}

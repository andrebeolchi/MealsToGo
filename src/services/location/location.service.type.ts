export interface ILocation {
	lat: number;
	lng: number;
	viewport: IViewport;
}

export interface IViewport {
	northeast: ILocation;
	southwest: ILocation;
}

export interface IGeometry {
	location: ILocation;
	viewport: IViewport;
}

export interface ILocationResult {
	geometry: IGeometry;
}

export interface IResLocationResponse {
	results: ILocationResult[];
	status?: string;
}

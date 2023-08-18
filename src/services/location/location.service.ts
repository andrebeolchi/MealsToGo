//@ts-ignore
import camelize from "camelize";
import { IResLocationResponse } from "./location.service.type";
import { locations } from "./mock";

export const locationResquest = async (
	searchTerm: string,
): Promise<IResLocationResponse> => {
	return new Promise((resolve, reject) => {
		const locationMock = locations[searchTerm];

		if (!locationMock) {
			reject("not found");
		}

		resolve(locationMock);
	});
};

export const locationTransform = (result: IResLocationResponse) => {
	const formattedResponse = camelize(result);
	const { geometry } = formattedResponse[0];
	const { lat, lng } = geometry.location;

	return { lat, lng };
};

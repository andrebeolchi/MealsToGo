import React, { createContext, useState } from "react";
import {
	ILocationContext,
	ILocationContextProps,
} from "./location.context.type";
import { locationResquest, locationTransform } from "./location.service";
import { ILocation } from "./location.service.type";

export const LocationContext = createContext<ILocationContext>({
	isLoading: false,
	error: null,
	location: null,
	search: () => {},
	keyword: "",
});

export const LocationContextProvider = ({
	children,
}: ILocationContextProps) => {
	const [keyword, setKeyword] = useState<string>("San Francisco");
	const [location, setLocation] = useState<ILocation | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword: string) => {
		setIsLoading(true);
		setKeyword(searchKeyword);

		if (!searchKeyword.length) {
			return;
		}

		locationResquest(searchKeyword.toLowerCase())
			.then(locationTransform)
			.then((result) => {
				setLocation(result);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
				keyword,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

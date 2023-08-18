import React, { createContext, useEffect, useState } from "react";
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
});

export const LocationContextProvider = ({
	children,
}: ILocationContextProps) => {
	const [keyword, setKeyword] = useState<string>("san francisco");
	const [location, setLocation] = useState<ILocation | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword: string) => {
		setIsLoading(true);
		setKeyword(searchKeyword);

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

	useEffect(() => {
		onSearch(keyword);
	}, []);

	return (
		<LocationContext.Provider
			value={{
				isLoading,
				error,
				location,
				search: onSearch,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

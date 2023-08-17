import React, { createContext } from "react";
import { IRawRestaurant } from "../../interfaces/restaurant";

export const RestaurantsContext = createContext<{
	restaurants: IRawRestaurant[];
}>({
	restaurants: [1, 2, 3],
});

export const RestaurantsContextProvider = ({
	children,
}: {
	children: JSX.Element;
}) => {
	return (
		<RestaurantsContext.Provider
			value={{
				restaurants: [1, 2, 3],
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};

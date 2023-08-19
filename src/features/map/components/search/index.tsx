import React, { useContext, useEffect, useState } from "react";

import { SearchBar, SearchContainer } from "./index.styles";

import { LocationContext } from "../../../../services/location/location.context";

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);

	return (
		<SearchContainer>
			<SearchBar
				placeholder="Search for a location"
				value={searchKeyword}
				icon="map"
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text: string) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};

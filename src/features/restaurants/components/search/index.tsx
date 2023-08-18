import React, { useContext, useState } from "react";

import { SearchBar, SearchContainer } from "./styles";

import { LocationContext } from "../../../../services/location/location.context";

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

	return (
		<SearchContainer>
			<SearchBar
				placeholder="Search for a location"
				value={searchKeyword}
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

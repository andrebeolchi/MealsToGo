import React, { useContext, useEffect, useState } from "react";

import { SearchBar, SearchContainer } from "./styles";

import { LocationContext } from "../../../../services/location/location.context";

export const Search = ({
	isFavouritesToggled,
	onFavouritesToggle,
}: {
	isFavouritesToggled: boolean;
	onFavouritesToggle: () => void;
}) => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

	useEffect(() => {
		setSearchKeyword(keyword);
	}, [keyword]);

	return (
		<SearchContainer>
			<SearchBar
				placeholder="Search for a location"
				icon={isFavouritesToggled ? "heart" : "heart-outline"}
				onIconPress={onFavouritesToggle}
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

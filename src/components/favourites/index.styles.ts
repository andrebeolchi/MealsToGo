import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const FavouriteButton = styled(TouchableOpacity)`
	background-color: transparent;
	border-color: #20232a;
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 9;
` as typeof TouchableOpacity;

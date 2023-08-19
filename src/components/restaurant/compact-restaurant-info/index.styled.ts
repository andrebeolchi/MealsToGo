import WebView from "react-native-webview";
import styled from "styled-components/native";

export const CompactImage = styled.Image`
	border-radius: 8px;
	width: 120px;
	height: 100px;
`;

export const CompactWebView = styled(WebView)`
	border-radius: 8px;
	width: 120px;
	height: 100px;
`;

export const Item = styled.View`
	padding: 10px;
	max-width: 120px;
	align-items: center;
`;

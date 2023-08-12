import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
	return (
		<>
			<SafeAreaView
				style={{
					flex: 1,
					marginTop: StatusBar.currentHeight
				}}>
				<View
					style={{
						backgroundColor: "green",
						padding: 16
					}}>
					<Text>Our react native blank canvas</Text>
				</View>
				<View
					style={{
						flex: 1,
						padding: 16,
						backgroundColor: "blue"
					}}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({});

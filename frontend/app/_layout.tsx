import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/ui/hooks/useColorScheme";
import { EventService } from "@/infrastructure/services/EventService";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../ui/assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		const unsubscribe = EventService.subscribe<Error>('network_error', (error) => {
			console.error(error);
		});

		return () => {
			unsubscribe();	
		}
	}, []);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider
			value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<Stack screenOptions={{ headerShown: false }}/>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}

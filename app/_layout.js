// Rest of the import statements
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {Stack} from "expo-router";
import {Inter_900Black} from "@expo-google-fonts/inter";


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [loaded, error] = useFonts({
        Inter_900Black,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <Stack/>
    )
}

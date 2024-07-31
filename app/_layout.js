// Rest of the import statements
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {Stack} from 'expo-router';
import {
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from '@expo-google-fonts/inter';
import NavigationContainer from "expo-router/build/fork/NavigationContainer";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
            <Stack/>
    );
}

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
    'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-medium': require('../assets/fonts/OpenSans-Medium.ttf'),
    'open-sans-semiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  useEffect(()=>{
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  
    if (!loaded && !error) {
    return null;
  }

  return <Stack />
}

export default RootLayout
import { Navbar } from "@/components";
import { images } from "@/constants";
import { JobActiveProp } from "@/type";
import { Stack } from "expo-router";
import { createContext, useState } from "react";
import { SafeAreaView, Text, Image, ScrollView, } from "react-native";


export const ActiveState = createContext<JobActiveProp>({
  isActive: 'Discover',
  setIsActive: ()=>{}
});

const index = () => {
  const [isActive, setIsActive] = useState('Discover');

  return (
    <ActiveState.Provider value={{isActive, setIsActive}}>
      <SafeAreaView>
        <Stack.Screen
          options={{
              headerTitle: '',
              headerTitleAlign: 'center',
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
              headerStyle: {backgroundColor: '#1f1f1f'},
              headerLeft: ()=>(<Text className="text-white text-lg">Hello Friend 👋🏽</Text>),
              headerRight: ()=>(<Image source={images.logo} resizeMode="contain" className="w-8 h-8"/>),
          }}
        />

        <ScrollView className="bg-primary px-4">
          <Navbar />
        </ScrollView>
      </SafeAreaView>

    </ActiveState.Provider>
  );
}

export default index;

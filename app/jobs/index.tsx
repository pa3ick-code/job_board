import { Stack } from "expo-router";
import { SafeAreaView, Text, Image, View, } from "react-native";

import { 
  ContextProvider,
  Navbar,
  Search
} from "@/components";
import { images } from "@/constants";
import JobLists from "@/components/JobLists";


const index = () => {

  return (
      <SafeAreaView className="flex-grow flex-shrink basis-0">
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

        <View className="bg-primary px-4 h-full">
          <Navbar/>
          <Search />
          <JobLists />
        </View>
      </SafeAreaView>
  );
}

export default index;

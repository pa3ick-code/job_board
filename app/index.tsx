import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { images } from "@/constants";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-grow flex-shrink basis-0 h-full">
      <Stack.Screen 
        options={{
          headerShown: false
        }}
      />

      <View className="h-full bg-primary justify-evenly"> 

          <View className="h-80 w-full">
            <Image 
              source={images.logo}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>

        <View className="px-8">
          <Text className='text-white text-5xl text-center leading-[px] font-os-regular mb-10'>
            Your search for the next dream job is over 
          </Text>

          <TouchableOpacity 
            className='flex-row justify-center items-center w-full bg-secondary rounded-full h-12'
            onPress={()=>{
              router.replace('/jobs')
            }}
          >
            <Text className="text-white font-os-medium mr-2">Start Searching</Text>
            <MaterialIcons name="arrow-right-alt" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Home
import { 
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image
 } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { fetchDetails } from "@/hooks/useFetch";
import { Stack, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import JobDetails from "@/components/JobDetails";

export default function Route() {
  const params = useLocalSearchParams();
  const {data, isLoading, error, refresh} = fetchDetails({id: params.id})
//   console.log(data.employer)
  return (
    <SafeAreaView className="flex-grow flex-shrink basis-0 bg-[#1f1f1f]">
        <Stack.Screen
          options={{
              headerTitle: '',
              headerTitleAlign: 'center',
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
              headerStyle: {backgroundColor: '#1f1f1f'},
              headerLeft: ()=>(<Text className="text-white text-lg">Job Details</Text>),
              headerRight: ()=>(<Image source={images.logo} resizeMode="contain" className="w-8 h-8"/>),
          }}
        />
            {isLoading? (
                <ActivityIndicator size="large" color='#ffffff40' className="mt-20 "/>
            ):error? (
                <View>
                    <View className="flex-row items-center justify-center gap-2 mt-20 mb-5">
                        <MaterialIcons name="error" size={24} color="#ffffff40" />
                        <Text className="text-[#ffffff40]">Something went Wrong</Text>
                    </View>
                    <TouchableOpacity 
                    className="w-32 h-8 bg-secondary rounded-2xl m-auto justify-center items-center"
                    onPress={refresh}
                    >
                        <Text className="text-white font-os-regular">Try again</Text>
                    </TouchableOpacity>
                </View>
            ):(
            <View className="h-full">
                <JobDetails 
                    id={data?.job_id}
                    role={data?.job_title}
                    company={data?.employer_name}
                    image={data?.employer_logo}
                    description={data?.job_description}
                    location={`${data?.job_city}, ${data?.job_country}`}
                    datePosted={data?.job_posted_at_timestamp}
                    type={data?.job_employment_type}
                    salary={data?.job_max_salary} 
                    skills={data?.job_required_skills}
                    qualifications={data?.job_highlights?.Qualifications}
                    link={data?.job_apply_link}
                />

            </View>)}
        </SafeAreaView>
  );
}

import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, ScrollView } from "react-native";
import useFetch from "@/hooks/useFetch";
import { MaterialIcons } from '@expo/vector-icons';

import JobCards from "./JobCards";
import { useState } from "react";

export default function JobLists() {
    const [index, setIndex] = useState(1);
    const {data, isLoading, error, refresh} = useFetch({
        route: 'list',
        query: 'Developer',
        location: 'Canada',
        index: index
    });

    const onPressNext = ()=>{ setIndex(prev => prev + 1) }

    const onPressPrev = ()=>{ setIndex(next => next  - 1)}

    console.log(index);
  return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <JobCards 
                            role={item.title}
                            company={item.company}
                            image={item.image}
                            description={item.description}
                            location={item.location}
                            datePosted={item.datePosted}
                            type={item.type}
                            salary={item.salaryRange}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{rowGap: 20, marginTop: 30}}
                    showsVerticalScrollIndicator={false}
                    
                />

                <View className="h-fit flex-row items-center justify-center gap-2 my-5 ">
                    {index === 1 || (
                        <TouchableOpacity className="bg-white h-8 w-8 justify-center items-center rounded-xl" onPress={onPressPrev}>
                            <MaterialIcons name="navigate-before" size={24} color="black" />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity className="bg-white h-8 w-8 justify-center items-center rounded-xl" onPress={onPressNext}>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>)}

            
        </ScrollView>
  );
}

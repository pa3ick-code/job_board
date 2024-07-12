import { menuList } from "@/constants";
import { ActiveStatus } from "./ContextPovider";
import { View, Text, FlatList, Touchable, TouchableOpacity } from "react-native";
import { useContext } from "react";

export default function Navbar() {
    const {isActive, setIsActive}= useContext(ActiveStatus);

  return (
    <View className="mt-3">
        <Text className="text-white text-3xl font-os-medium leading-loose mb-2">Find Jobs</Text>
        <View className="relative h-fit w-full">
            <View className="bg-white w-full h-2 absolute top-[55%] left-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <FlatList 
                data={menuList}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={()=>{ setIsActive(item) }}
                        className={`bg-white h-8 w-20 rounded-3xl items-center justify-center
                            ${isActive === item? "bg-secondary":"bg-white"}`}
                    >
                        <Text className={`${isActive === item? "text-white":""}`}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
                horizontal
                keyExtractor={item => item}
                contentContainerStyle ={{columnGap: 10, marginTop: 10}}
            />
        </View>

    </View>
  );
}

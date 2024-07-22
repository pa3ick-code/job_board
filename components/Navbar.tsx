import useStateStore from "@/app/Store";
import { menuList } from "@/constants";
import { View, Text, FlatList, Touchable, TouchableOpacity } from "react-native";

export default function Navbar() {
    const isActive = useStateStore( state => state.isActive)
    const setIsActive = useStateStore( state => state.updateIsActive)
    
  return (
    <View className="mt-3">
        <Text className="text-white text-3xl font-os-medium leading-loose mb-2">Find Jobs</Text>
        <View className="relative h-fit w-full">
            <View className="bg-white w-full h-2 absolute top-[55%] left-0 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <FlatList 
                data={menuList}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        key={item.id}
                        activeOpacity={1}
                        onPress={()=>{ setIsActive(item.title)}}
                        className={`bg-white h-8 w-20 rounded-3xl items-center justify-center
                            ${isActive === item.title? "bg-secondary":"bg-white"}`}
                    >
                        <Text className={`${isActive === item.title? "text-white":""}`}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle ={{columnGap: 10, marginTop: 10}}
            />
        </View>

    </View>
  );
}

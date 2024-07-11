import { ActiveState } from "@/app/(screens)/jobs";
import { menuList } from "@/constants";
import { useContext, createContext, useState } from "react";
import { View, Text, FlatList, Touchable, TouchableOpacity } from "react-native";

export default function Navbar() {
    const {isActive, setIsActive}= useContext(ActiveState);
  return (
    <View>
    <Text className="text-white text-3xl font-os-regular">Find Jobs</Text>
    <FlatList 
        data={menuList}
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={()=>{
                    setIsActive(item)
                }}
                className={`bg-white py-3 px-5 rounded-3xl  ${isActive === item? "bg-secondary":"bg-white"}`}
            >
                <Text className={`${isActive === item? "text-white":""}`}>
                    {item}
                </Text>
            </TouchableOpacity>
        )}
        horizontal
        keyExtractor={item => item}
    />
    </View>
  );
}

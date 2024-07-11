import { ButtonProps } from "@/type";
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function Button({item, styles, handlePress}: ButtonProps) {
    const [isActive, setIsActive] = useState('Discover');
  return (
    <TouchableOpacity
        onPress={()=>{
            handlePress;
            setIsActive(item);
        }}
        className={`justify-center items-center h-8 w-18 mr-2 rounded-lg ${styles}`}
    >
      <Text className="text-sm">{item}</Text>
    </TouchableOpacity>
  );
}

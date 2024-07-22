import { View, Text,  TouchableOpacity } from "react-native"

import { useState } from "react";

export default function Description({
    desc,
    title,
    icon,
}:{
    desc: string,
    title: string,
    icon: React.ReactNode,
}) {
    const [readMore, setReadMore] = useState(false);
  return (
    <View className="bg-zinc-800 px-5 py-6 rounded-3xl my-3">
        <View className="flex-row gap-4 items-center">
        <View className="bg-zinc-900 w-10 h-10 rounded-lg items-center justify-center">
            {icon}
        </View>
        <Text className="text-zinc-400 font-os-bold text-base">{title}</Text>
        </View>

        <View className="">
            <Text className="text-zinc-400 text-sm mt-3 font-os-regular ">
                {
                !readMore? (
                    desc?.length > 500? (
                        desc?.slice(0, 500).toString().replace(/[\r\n]+/g, ' ') + '...'
                    ):(desc)
                ):(desc) 
                }
            </Text>
            
            <View>
                {
                    desc?.length > 500 && (
                    <TouchableOpacity 
                        className="bg-zinc-100 rounded-md w-20 h-7 block justify-center items-center mt-5 font-os-medium"
                        onPress={()=> setReadMore(!readMore)}
                    >
                        <Text className="text-xs font-os-medium">{!readMore? 'Read More':'Close'}</Text>
                    </TouchableOpacity>
                    )
                }
            </View>
        </View>

    </View>
  );
}

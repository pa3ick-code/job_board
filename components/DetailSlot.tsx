import { View, Text } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { DetialSlotProp } from "@/type";

const DetailSlot = ({location, datePosted, type}: DetialSlotProp) => {
  return (
    <View className="px-3 flex-row gap-2 my-1">
        <View className="flex-row bg-[#ffffff40] w-fit  backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border-[0.8px] border-[#ffffffbf]">
            <Ionicons name="location-outline" size={14} color="#e2e8f0"/>
            <Text className="text-xs text-slate-200 font-os-regular ml-1">{location || 'Unknown'}</Text>
        </View>
        <View className="flex-row bg-[#ffffff40] w-fit  backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border-[0.8px] border-[#ffffffbf]">
            <SimpleLineIcons name="graduation" size={14} color="#e2e8f0"/>
            <Text className="text-xs text-slate-200 font-os-regular ml-1">{datePosted || 'Unknown'}</Text>
        </View>
        <View className="flex-row bg-[#ffffff40] w-fit  backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border-[0.8px] border-[#ffffffbf]">
            <Ionicons name="time-outline" size={14} color="#e2e8f0"/>
            <Text className="text-xs text-slate-200 font-os-regular ml-1">{type || 'Unknown'}</Text>
        </View>
    </View>
  );
}

export default DetailSlot;

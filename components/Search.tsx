import { View, TextInput, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Search() {
  return (
    <View className="flex-row items-center justify-between  mt-2">
      <View className="bg-zinc-800 rounded-lg mt-5 h-12 w-[83%]">
        <TextInput 
            className="h-full w-full text-gray-400 px-4"
            placeholder="Search for company or roles"
            placeholderTextColor={'rgb(107 114 128);'}
            cursorColor={'rgb(107 114 128);'}
        />
      </View>

        <TouchableOpacity
        className="bg-zinc-800 rounded-lg mt-5 h-12 w-12 justify-center items-center"
        >
            <AntDesign name="search1" size={18} color="rgb(107 114 128)" />
        </TouchableOpacity>
    </View>
  );
}

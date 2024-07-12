import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DetailSlot from "./DetailSlot";
import { JobCardProp } from "@/type";

export default function JobCards({
    role, 
    company, 
    image, 
    description,
    location,
    datePosted,
    type,
    salary
}: JobCardProp) {
    // const colors  = ['bg-secondary', 'bg-yellow-900', 'bg-blue-900', 'bg-green-900' ];
    // const bg = colors[Math.floor(Math.random() * colors.length)];
    let newdesc = "";
    for (let i = 0; i < description.length; i++)
        if (!(description[i] == "\n" || description[i] == "\r"))
            newdesc += description[i];

  return (
    <View className="w-full h-fit relative rounded-3xl">
        <View 
            className={`bg-secondary w-full h-44 rounded-t-3xl `}
        >

            <View className="flex-row  px-3 py-2 items-start justify-between">
                <View className=" flex-row items-center gap-4">
                    <Image 
                        source={image !== ''? {uri: image}: require('../assets/images/logo.png')}
                        className="w-12 h-12 rounded-md"
                        resizeMode="contain"
                    />
                    <View>
                        <Text className="text-slate-100 font-os-semibold text-lg">
                            {role.length >20? (role.slice(0, 20)+'..'): role}
                        </Text>
                        <Text className="text-slate-300 font-os-regular">
                            {company.length >30? (company.slice(0,30)+'..'): company}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-zinc-800 px-2 py-2 rounded-xl border-[1px] border-slate-500 flex-row items-center mr-3 shadow-xl">
                    <Text className="text-slate-400 mr-1">View</Text>
                    <Feather name="external-link" size={14} color="#94a3b8" />
                </TouchableOpacity>
            </View>

            <DetailSlot location={location} datePosted={datePosted}  type={type}/>

            <View className="px-3 mt-2">
                <Text className="text-zinc-300 text-xs font-os-regular" numberOfLines={3}>
                    {newdesc.length >170? (newdesc.slice(0, 170)+'..'): newdesc}
                    <Link href={'/'} className="font-os-bold underline decoration-zinc-300">Read more</Link>
                </Text>
            </View>
        </View>

        <View className="bg-white w-full h-14 rounded-b-3xl px-3 justify-center item-center">
            <View className="flex-row justify-between">
                <View className="flex-row gap-1">
                    <Ionicons name="timer-outline" size={14} color="black" />
                    <Text className="text-xs font-os-semibold ">Posted {datePosted || '1 week ago'}</Text>
                </View>

                <Text className="font-os-bold text-base">{salary || '$400/mo'}</Text>
            </View>
        </View>
    </View>
  );
}

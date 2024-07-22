import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import DetailSlot from "./DetailSlot";
import Description from "./Description";
import { JobDetailProp  } from "@/type";
import { Link } from "expo-router";
import useStateStore from "@/app/Store";
import { useEffect } from "react";
import { getItem, mergeItem } from "@/utils/AsyncStorage";

export default function JobDetails({
    id,
    role, 
    company, 
    image, 
    link,
    description,
    location,
    datePosted,
    type,
    salary,
    skills,
    qualifications,
}: JobDetailProp) {

    const  isSaved  = useStateStore(state => state.isSaved);
    const setIsSaved = useStateStore(state => state.updateIsSaved);
    
    const  handleSave =async()=>{
        await mergeItem(id, {category: 'saved'})
    }

    useEffect(()=>{
        const status = async()=>{
            const saved = await getItem(id);
            if(saved.category === 'saved'){setIsSaved(true)}
        }
        status()
    },[])

  return (
    <ScrollView className="mx-3 relative" showsVerticalScrollIndicator={false}>
        <View className="w-full h-fit relative rounded-3xl mb-4">
            <View className={`bg-green-800 w-full h-fit rounded-t-3xl `}>

                <View className="flex-row  px-3 py-2 items-start justify-between">
                    <View className=" flex-row items-center gap-4">
                        <Image 
                            source={require('../assets/images/logo.png')}
                            className="w-12 h-12 rounded-md"
                            resizeMode="contain"
                        />
                        <View>
                            <Text className="text-slate-100 font-os-semibold text-lg">
                                {role}
                            </Text>
                            <Text className="text-slate-300 font-os-regular">
                                {company?.length >30? (company.slice(0,30)+'..'): company}
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="mb-5">
                    <DetailSlot location={location} datePosted={datePosted}  type={type}/>
                </View>
                
            </View>

            <View className="bg-white w-full h-14 rounded-b-3xl px-3 justify-center item-center">
                <View className="flex-row justify-between">
                    <View className="flex-row gap-1">
                        <Ionicons name="timer-outline" size={14} color="black" />
                        <Text className="text-xs font-os-semibold ">Posted {'1 week ago'}</Text>
                    </View>

                    <Text className="font-os-bold text-base">{ salary || '$' + Math.floor(Math.random()* (1000 - 400 + 1)) + '/mo'}</Text>
                </View>
            </View>
        </View>

        <Description
            desc={description} 
            title="Job Description" 
            icon={<Feather name='edit' size={15} color="#d1d5db"/>}
        />

        {skills && (
            <Description
            desc={skills}
            title="Skills & Requirement"
            icon={<Feather name="check-square" size={15} color="#d1d5db" />}
            />
        )}

        {qualifications && (
            <Description
            desc={qualifications}
            title="Qualifications"
            icon={<Feather name="star" size={15} color="#d1d5db" />}
            />
        )}

        <View className="item-center flex-row justify-center gap-4 mb-3 pt-3">
            <TouchableOpacity className="bg-zinc-100 rounded-xl w-28 h-10 items-center justify-center" onPress={handleSave}>
                <Text className="font-os-semibold text-base">
                    {isSaved? 'Saved' : 'Save'}
                </Text>
            </TouchableOpacity>
            {link && (
                <Link href={link}>
                    <View className="bg-green-800 w-44 h-10 flex-row justify-center items-center rounded-xl ">
                        <Text className="text-zinc-100 font-os-semibold text-base mr-3">Apply</Text>
                        <View className="mt-1">
                            <MaterialIcons name="arrow-right-alt" size={15} color="white" />
                        </View>
                    </View>
                </Link>
            )}
        </View>
    </ScrollView>
  );
}

/// <reference types="nativewind/types" />

import { SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";

declare type JobSearchParam = {
    route: string;
    query: string; 
    location: string; 
    index: number
}

declare type ButtonProps = {
    item: string;
    styles: string
    handlePress: ()=>void;
}

declare type JobActiveProp = {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>
}

declare type JobCardProp = {
    role: string;
    company: string;
    image: string;
    description: string;
    location: string;
    datePosted: string;
    type: string;
    salary;
}

declare type DetialSlotProp = {
    location: string;
    datePosted: string;
    type: string;
}

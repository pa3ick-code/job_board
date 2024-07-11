/// <reference types="nativewind/types" />

import { SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";

declare type ButtonProps = {
    item: string;
    styles: string
    handlePress: ()=>void;
}

declare type JobActiveProp = {
    isActive: string;
    setIsActive: React.Dispatch<React.SetStateAction<string>>
}
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
    job_id: string;
    role: string;
    company: string;
    image: string;
    description: string;
    location: string;
    datePosted: string;
    type: string;
    salary: string;
    // handlePress: ()=> void;
}

declare type DetialSlotProp = {
    location: string;
    datePosted: string;
    type: string;
}

declare type IDProp = {
    employer_name: string
}

declare type JobDetailProp = {
    id: string;
    role: string;
    company: string;
    image: string;
    description: string;
    location: string;
    datePosted: string;
    type: string;
    salary: string;
    skills: string;
    qualifications: string;
    link?:  string
}

declare type FormEvent = React.FormEvent<HTMLFormElement>
declare type TouchEvent = React.TouchEvent<HTMLButtonElement>
declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>
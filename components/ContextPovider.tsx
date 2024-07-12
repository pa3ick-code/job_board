import { JobActiveProp } from "@/type";
import { createContext, useState } from "react";
import { View } from "react-native";

export const ActiveStatus = createContext<JobActiveProp>({
  isActive: 'Discover',
  setIsActive: ()=>{}
});

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)=>{

  const [isActive, setIsActive] = useState('Discover');

    return(
        <ActiveStatus.Provider value={{isActive, setIsActive}}>
            {children}
        </ActiveStatus.Provider>
    )
}

export default ContextProvider;
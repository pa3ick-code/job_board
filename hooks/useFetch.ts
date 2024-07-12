import { JobSearchParam } from '@/type';
import { getItem, setItem } from '@/utils/AsyncStorage';
import { useEffect, useState } from 'react';

export default function useFetch({query,  route, location, index}: JobSearchParam) {
    
    const {EXPO_PUBLIC_RAPID_API_KEY} =process.env
    const params  = new URLSearchParams({
        query: query!,
        location: location!,
        index: index.toString(),
        language: 'en_GB',
        remoteOnly: 'true',
        datePosted: 'week',
        employmentType: 'fulltime3Bintern%3Bcontractor'
    });

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    // const url = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=all&language=en_GB'
    const url = `https://jobs-api14.p.rapidapi.com/${route}?${params?.toString()}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': EXPO_PUBLIC_RAPID_API_KEY!,
            'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        setIsLoading(true);
        try {
            if(!await getItem("data")  && await getItem("data") !== data){
                const response = await fetch(url, options);
                const result = await response.json();
                const res = await result.jobs;
                await setItem("data", await res)
                const dataItem = await getItem("data")
                setData(dataItem)
            }else{
                const dataItem = await getItem("data")
                setData(dataItem);
            }
        } catch (e: any) {
            setError(true)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData();
    },[index]);

    const refresh = () => {
        fetchData();
    }
    
    return {data, error, isLoading, refresh}
}

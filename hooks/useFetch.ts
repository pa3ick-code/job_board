import { IDProp, JobSearchParam } from '@/type';
import { getItem, setItem } from '@/utils/AsyncStorage';
import { useEffect, useState } from 'react';

export function useFetch({query,  route, location, index}: JobSearchParam) {
    
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
    const url = `https://jsearch.p.rapidapi.com/search?${params?.toString()}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': EXPO_PUBLIC_RAPID_API_KEY!,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        setIsLoading(true);
        try {
            const getKey = index.toString()
            if(!await getItem(getKey)){
                const response = await fetch(url, options);
                const result = await response.json();
                const res = await result.data;
                await setItem(getKey, await res)
                const dataItem = await getItem(getKey)
                setData(dataItem)
            }else{
                const dataItem = await getItem(getKey)
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


export function fetchDetails({id}: {id: any}) {
    
    const {EXPO_PUBLIC_RAPID_API_KEY} = process.env

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<any>();
    const [error, setError] = useState(false);

    const params = new URLSearchParams({
        job_id: id,
        extended_publisher_details: 'false'
    })

    // const url = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=all&language=en_GB'
    const url = `https://jsearch.p.rapidapi.com/job-details?${params.toString()}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': EXPO_PUBLIC_RAPID_API_KEY!,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        setIsLoading(true);
        try {
                if(!await getItem(id)){
                    const response = await fetch(url, options);
                    const result = await response.json();
                    const res = await result.data[0];
                    await setItem(id, await res)
                    const dataItem = await getItem(id)
                    setData(dataItem)
                }else{
                    const dataItem = await getItem(id);
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
    },[]);

    const refresh = () => {
        fetchData();
    }
    
    return {data, error, isLoading, refresh}
}

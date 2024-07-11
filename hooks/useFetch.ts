import { JobSearchParams } from '@/type';
import { useEffect, useState } from 'react';

export default function useFetch({query, num_pages, page = "1", date_posted = "all"}: JobSearchParams) {
    const params  = new URLSearchParams({
        query: query!,
        num_pages: num_pages!,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState(false);


    const url = `https://jsearch.p.rapidapi.com/search?${params?.toString()}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.EXPO_PUBLIC_RAPID_API_KEY!,
            'x-rapidapi-host': process.env.EXPO_PUBLIC_RAPID_API_HOST!,
        }
    };

    const fetchData = async() => {
        setIsLoading(true);
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const res = await result.data
            setData(res)
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

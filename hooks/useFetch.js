import {useEffect, useState} from "react";
import {RAPID_API_KEY} from "@env"
import axios from "axios";

const rapidApiKey = RAPID_API_KEY
export const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)

        } catch (e) {
            setError(e)
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    return {data, isLoading, error, refetch}
}

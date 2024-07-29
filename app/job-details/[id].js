import {Text} from "react-native";
import {useGlobalSearchParams, useRouter, useSearchParams} from "expo-router";
import useFetch from "../../hooks/useFetch";


const JobDetails = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()

    const {isLoading, data, refetch, error} = useFetch("job-details", {job_id: params.id})
    return (
        <Text>
fsdfsdffdsd

        </Text>
    )
}

export default JobDetails
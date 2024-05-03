import { useQuery } from "@tanstack/react-query"
import instance from "../services/instance";

const useLogOut = () => {
    const { data, ...rest } = useQuery({
        queryKey: ['logout'],
        queryFn: async () => {
            try {
                await instance.get('/auth/logout')

                alert("đăng xuất thành công")
                
            } catch (error) {
                console.log(error);
            }
        }
    })

    return {
        data,
        ...rest
    }
}

export default useLogOut
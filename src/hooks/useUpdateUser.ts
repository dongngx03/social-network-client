import { useMutation } from "@tanstack/react-query"
import instance from "../services/instance";
import formUser from "../interface/formUser";

const useUpdateUser = () => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: formUser) => {
            try {
                const res = await instance.put("/v1/api/user/", data)
                
            } catch (error) {
                console.log(error);

            }
        },
        onSuccess: () => {

        }
    })

    return {
        mutate,
        ...rest
    }
}
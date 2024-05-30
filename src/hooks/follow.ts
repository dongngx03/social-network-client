import { useMutation } from "@tanstack/react-query"
import instance from "../services/instance"

export const follow = (callback: () => any) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: { source_id: number, target_id: number }) => {
            // theo dõi 
            return await instance.post('/v1/api/following/', data)
        },
        onSuccess: () => {
            callback()
        }
    })

    return {
        mutate,
        ...rest
    }
}

// bỏ theo dõi người dùng 
export const unFollow = (callback: () => any) => {
    const { mutate, ...rest } = useMutation({
        mutationFn: async (data: { source_id: number, target_id: number }) => {
            return await instance.post('/v1/api/following/un-follow', data)
        },
        onSuccess: () => {
            callback()
        }
    })

    return {
        mutate,
        ...rest
    }
}
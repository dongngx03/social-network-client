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

export const getAllUserFollowing = async (user_id: number | string, type: "FOLLOWING" | "FOLLOW") => {
    switch (type) {
        case "FOLLOW":
            const { data } = await instance.get('/v1/api/following/users-follow-me/'+ user_id)
            return data
            break;
        case "FOLLOWING":
            const res = await instance.get('/v1/api/following/users-following/'+ user_id)
            return res['data']
        default:
            break;
            return
    }
}

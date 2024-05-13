import instance from "../services/instance"

export const createPost = async (data: any, setLoading: (args: boolean) => void) => {
    try {
        setLoading(true)
        const res = await instance.post('/v1/api/post', data)
        setLoading(false)
        return res
    } catch (error) {
        console.log(error);
        return error
    }
}


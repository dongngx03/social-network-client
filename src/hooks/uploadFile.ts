import axios from "axios"

const uploadFile = async (
    CLOUND_NAME: string,
    PRESET_NAME: string,
    FOLDER_NAME: string,
    file: any,
    setLoading: (args: boolean) => void
) => {
    const API = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`
    const imageUrlArray: string[] = []
    const formData = new FormData()
    formData.append("upload_preset", PRESET_NAME)
    formData.append("folder", FOLDER_NAME)
    if (file.length === 0) {
        return imageUrlArray
    }
    setLoading(true)

    for (const item of file) {
        formData.append("file", item)
        await axios.post(API, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => imageUrlArray.push(res?.data?.url))
    }
    setLoading(false)

    console.log(imageUrlArray);
    return imageUrlArray

}

export default uploadFile
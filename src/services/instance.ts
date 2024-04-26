import axios from "axios";

const instance: any = axios.create({
    baseURL: "http://localhost:5000"
})

export default instance
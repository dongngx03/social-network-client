import { useQuery } from "@tanstack/react-query";



const useGetUser = (setUser: (agrs: any) => {}) => {
    const { data, ...rest } = useQuery({
        queryKey: ['USER'],
        queryFn: async () => {
            try {
                const request = await fetch("http://localhost:5000/auth/login/success", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": "true",
                    },
                });

                const res = await request.json();
                if (res?.success) {
                    setUser(res)
                } else {
                    window.location.href = "/sign-in"
                }
                return res

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

export default useGetUser
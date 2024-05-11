import { useMutation } from "@tanstack/react-query"
import instance from "../services/instance"
import { Spin } from "antd"
import { useDebouncedCallback } from 'use-debounce';
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const Search = () => {
    const { user } = useContext(AppContext)
    // tìm kiếm 
    const { mutate, isPending, data } = useMutation({
        mutationKey: ['SEARCHUSER'],
        mutationFn: async (user: { nickname: string }) => {
            try {
                const { data } = await instance.post('/v1/api/user/search', user)
                return data
            } catch (error) {
                console.log(error);
            }
        }
    })
    const searchDebounce = useDebouncedCallback((value) => { mutate(value) }, 1000)
    const searchUser = async (e: any) => {
        searchDebounce({ nickname: e.target.value, userNickname: user?.user?.nickname })
    }


    return (
        <div className="absolute top-0 left-[72px] w-[397px] h-full bg-white shadow-xl border-r z-10 rounded-e-2xl flex flex-col">
            <div className="w-full h-auto flex flex-col px-4 py-6 gap-9 border-b">
                <div className="w-full px-3">
                    <span className="text-2xl font-sans font-medium">Tìm kiếm</span>
                </div>
                <div className="w-full ">
                    <input
                        type="text"
                        className="w-full py-2 bg-[#EFEFEF] focus:outline-none px-3 rounded-lg"
                        placeholder="Tìm Kiếm"
                        onInput={searchUser}
                    />
                </div>
            </div>

            <div className="w-full flex-1 h-full overflow-auto flex flex-col">
                {
                    isPending
                        ?
                        <div className="w-full h-full flex justify-center items-center">
                            <Spin />
                        </div>
                        :
                        <>
                            {
                                data
                                    ?
                                    data?.data?.map((item: any, index: number) => (
                                        <a
                                            key={index}
                                            href={`/profile/${item?.nickname}`}
                                            className="w-full hover:bg-gray-100 h-auto flex justify-start items-center px-5 py-2 gap-2"
                                        >
                                            <div className="w-[44px] h-[44px] rounded-full">
                                                <img
                                                    className="w-full h-full rounded-full object-cover "
                                                    src={item?.avatar}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <span className="text-[14px] font-sans font-semibold">{item?.nickname}</span>
                                                <span className="text-[14px] font-sans font-normal text-[#6D6D6D]">{`${item?.fistname} ${item?.lastname}`}</span>
                                            </div>
                                        </a>
                                    ))
                                    : <div className="w-full h-full flex justify-center items-center">
                                        <span className="text-gray-400">Nhập từ khóa để tìm kiếm</span>
                                    </div>
                            }
                        </>
                }

            </div>
        </div>
    )
}

export default Search
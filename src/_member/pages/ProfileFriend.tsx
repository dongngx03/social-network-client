import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import instance from "../../services/instance";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import { Image } from "antd";


const ProfileFriend = () => {
    const { nickname } = useParams()
    const { setSidebarMini } = useContext(AppContext)
    const { data, isLoading } = useQuery({
        queryKey: ["FRIEND"],
        queryFn: async () => {
            try {
                const { data } = await instance.post("/v1/api/user/detail", { nickname: nickname })
                return data
            } catch (error) {
                return error

            }
        }
    })
    useEffect(() => {
        setSidebarMini(false);
    }, [])

    if (isLoading) return <><Loading /></>
    if (!data?.success) return <><NotFound /></>
    return (
        <div className='w-full h-full overflow-auto'>
            <div className="profile">
                {/* header */}
                <div className="w-full h-auto flex flex-col px-6 pt-10">
                    <div className="w-full h-1/2 pb-7">
                        {/* avatar */}
                        <div className="w-full flex">
                            <div className="w-1/3 flex justify-center items-center">
                            <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center">
                                    <Image
                                        className=" w-full h-full rounded-full object-cover "
                                        src={data?.data?.avatar}
                                    />
                                </div>
                            </div>

                            <div className="w-2/3 flex flex-col gap-5 justify-center">
                                <div className=" flex justify-start gap-5 items-center">
                                    <span className="text-[20px] font-normal font-sans">{data?.data?.nickname}</span>
                                    <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Theo dõi</button>
                                    <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Nhắn tin</button>
                                    <button>
                                        <svg aria-label="Tùy chọn" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tùy chọn</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                </div>

                                <div className="flex justify-start items-center gap-8">
                                    <span className="font-sans "><strong>1</strong> bài viết</span>
                                    <button className="font-sans">
                                        <strong>6</strong> người theo dõi
                                    </button>

                                    <button className="font-sans">
                                        Đang theo dõi <strong>20</strong> người dùng
                                    </button>
                                </div>

                                <div>
                                    <span className="font-sans font-medium text-md">
                                        {`${data?.data?.fistname} ${data?.data?.lastname}`}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-sans text-md">
                                        Thông tin khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* story */}

                    <div className=" overflow-auto relative w-full h-1/2 border-b p-10 flex justify-start gap-10">
                        <button className="bg-[#FAFAFA] w-[77px] h-[77px] rounded-full flex justify-center items-center">
                            <svg aria-label="Biểu tượng dấu cộng" className="x1lliihq x1n2onr6 x10xgr34" fill="currentColor" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Biểu tượng dấu cộng</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>
                        <button className="">
                            <img className=" w-[77px] h-[77px] object-cover rounded-full outline outline-1 outline-gray-400 border-4 border-white" src="https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        </button>

                    </div>
                </div>

                {/* post */}
                <div className="w-full h-auto px-6 pb-10 flex flex-col">
                    <span className="flex items-center gap-2 font-sans text-sm py-3">
                        <svg aria-label="" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        BÀI VIẾT
                    </span>

                    <div className="flex justify-start flex-wrap gap-3">
                        <Link to={"/"}>
                            <div className="w-[309px] h-[309px] ">
                                <img className="w-full h-full object-cover " src="https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-g-toa-nha-xay-d-ng-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="w-[309px] h-[309px] ">
                                <img className="w-full h-full object-cover " src="https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-g-toa-nha-xay-d-ng-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="w-[309px] h-[309px] ">
                                <img className="w-full h-full object-cover " src="https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-g-toa-nha-xay-d-ng-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="w-[309px] h-[309px] ">
                                <img className="w-full h-full object-cover " src="https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-g-toa-nha-xay-d-ng-nha.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            </div>
                        </Link>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default ProfileFriend
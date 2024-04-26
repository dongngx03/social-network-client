import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppProvider"
import { useContext, useEffect } from "react"

const Profile = () => {
    const { setSidebarMini } = useContext(AppContext)
    useEffect(() => {
        setSidebarMini(false)
    }, [])
    return (
        <div className='w-full h-full overflow-auto'>
            <div className="profile">
                {/* header */}
                <div className="w-full h-auto flex flex-col px-6 pt-10">
                    <div className="w-full h-1/2 pb-7">
                        {/* avatar */}
                        <div className="w-full flex">
                            <div className="w-1/3 flex justify-center items-center">
                                <img className="w-[150px] h-[150px] rounded-full" src="data:image/jpeg;base64,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" alt="" />
                            </div>

                            <div className="w-2/3 flex flex-col gap-5 justify-center">
                                <div className=" flex justify-start gap-5 items-center">
                                    <span className="text-[20px] font-normal font-sans">Dong_ngy</span>
                                    <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Chỉnh sửa trang cá nhân</button>
                                    <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Xem kho lưu trữ</button>
                                    <button>
                                        <svg aria-label="Tùy chọn" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tùy chọn</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
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
                                        Đông nguyễn
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
                        <svg aria-label="" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
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

export default Profile
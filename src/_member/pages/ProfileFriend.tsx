import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../../services/instance";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import { Empty, Image, Modal, Popconfirm } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { follow, unFollow } from "../../hooks/follow";




const ProfileFriend = () => {
    const { nickname } = useParams()
    const queryClient = useQueryClient()
    const { setSidebarMini, openPostDetail, setOpenPostDetail, user } = useContext(AppContext)
    const { data, isLoading } = useQuery({
        queryKey: ["FRIEND"],
        queryFn: async () => {
            try {
                const { data } = await instance.post("/v1/api/user/detail", { nickname: nickname, source_id: user?.user?.id })
                return data
            } catch (error) {
                return error
            }
        }
    })

    const followService = follow(() => queryClient.invalidateQueries({ queryKey: ['FRIEND'] }))

    const unFollowService = unFollow(() => queryClient.invalidateQueries({ queryKey: ['FRIEND'] }))

    const handleFollow = () => {
        followService.mutate({
            source_id: user?.user?.id,
            target_id: data?.data?.id
        })
    }

    const handleUnFollow = () => {
        unFollowService.mutate({
            source_id: user?.user?.id,
            target_id: data?.data?.id
        })
    }

    console.log(data);


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
                                    {
                                        data?.checkFollow
                                            ? <Popconfirm
                                                title="Xác nhận !"
                                                description="Bạn muốn hủy theo dõi người này ?"
                                                okText="Xác nhận"
                                                cancelText="Hủy"
                                                onConfirm={handleUnFollow}
                                            >
                                                <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Bỏ theo dõi</button>
                                            </Popconfirm>
                                            : <Popconfirm
                                                title="Xác nhận"
                                                description="Theo dõi người này ?"
                                                okText="Xác nhận"
                                                cancelText="Hủy"
                                                onConfirm={handleFollow}
                                            >
                                                <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Theo dõi</button>
                                            </Popconfirm>
                                    }
                                    <button className="bg-gray-200 px-3 py-[6px] text-sm rounded-md font-semibold font-sans hover:bg-[#DBDBDB]">Nhắn tin</button>
                                    <button>
                                        <svg aria-label="Tùy chọn" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tùy chọn</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    </button>
                                </div>

                                <div className="flex justify-start items-center gap-8">
                                    <span className="font-sans "><strong>{data?.coutPost}</strong> bài viết</span>
                                    <button className="font-sans">
                                        <strong>{data?.data?._count?.following_2}</strong> người theo dõi
                                    </button>

                                    <button className="font-sans">
                                        Đang theo dõi <strong>{data?.data?._count?.following_1}</strong> người dùng
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

                        {
                            data?.allPost?.length !== 0
                                ? data?.allPost?.map((item: any, index: number) => (
                                    <button
                                        key={index}
                                        onClick={() => setOpenPostDetail({
                                            status: true,
                                            data: item,
                                            user: data?.data
                                        })}
                                    >
                                        <div className="w-[309px] h-[309px] ">
                                            <img
                                                className="w-full h-full object-cover "
                                                src={item?.images[0]?.imageUrl}
                                                alt="img post"
                                            />
                                        </div>
                                    </button>
                                ))
                                : <div className="w-full h-full flex justify-center items-center ">
                                    <Empty />
                                </div>
                        }

                    </div>


                </div>

            </div>

            <Modal
                open={openPostDetail.status}
                width={1000}
                onCancel={() => setOpenPostDetail({ status: false, data: null })}
                footer={null}
                className=""
            >
                <div className='xl:w-full xl:h-[530px] 2xl:w-full 2xl:h-[530px] flex justify-center lg:w-[870px] lg:h-[450px] md:w-[650px] md:h-[400px] z-100'>
                    <div className='w-1/2 h-full'>
                        <div className="w-full h-full bg-black">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                keyboard={{
                                    enabled: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Keyboard, Pagination, Navigation]}
                                className="mySwiper w-full h-full"
                            >
                                {
                                    openPostDetail?.data?.images.map((item: any, index: number) => (
                                        <SwiperSlide>
                                            <div className="w-full h-full flex justify-center items-center" key={index}>
                                                <Image className="w-full h-full object-cover"
                                                    src={item.imageUrl}
                                                />
                                            </div>
                                        </SwiperSlide>

                                    ))
                                }


                            </Swiper>


                        </div>
                    </div>

                    <div className='w-1/2 bg-white flex flex-col justify-between'>
                        {/* profile */}
                        <div className='w-full h-[60px] flex justify-between items-center px-3 py-3 border-b '>
                            <Link to={""} className='flex gap-2 justify-start items-center'>
                                <div className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img
                                        className='w-full h-full rounded-full object-cover'
                                        src={openPostDetail?.user?.avatar}
                                        alt=""
                                    />
                                </div>
                                <div className='grid'>
                                    <span className='text-[14px] font-semibold'>{openPostDetail?.user?.nickname}</span>
                                    <span className='text-[12px] font-light text-gray-500'>{`${openPostDetail?.user?.fistname} ${openPostDetail?.user?.lastname}`}</span>
                                </div>
                            </Link>

                            <Link to={""} className='text-xs font-semibold'>
                                <svg aria-label="Tùy chọn khác" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tùy chọn khác</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </Link>
                        </div>
                        {/* comment */}
                        <div
                            className='w-full flex-1 h-full relative overflow-auto px-3 scrollbarNone'
                            style={{ scrollbarWidth: "none" }}
                        >
                            {/* comment item */}
                            <div className='pt-3'>
                                <div className='flex gap-3 justify-start'>
                                    <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                        <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                    </Link>
                                    <div className=''>
                                        <div className='w-80 flex flex-col gap-2'>
                                            <div>
                                                <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                                <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                            </div>

                                            <div className='flex gap-4 items-center '>
                                                <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                                <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                                <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                            </div>

                                            <div className='flex jutify-start items-center gap-4'>
                                                <hr className='w-[26px] border-1' />
                                                <button>
                                                    <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* comment item */}
                            <div className='pt-3'>
                                <div className='flex gap-3 justify-start'>
                                    <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                        <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                    </Link>
                                    <div className=''>
                                        <div className='w-80 flex flex-col gap-2'>
                                            <div>
                                                <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                                <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                            </div>

                                            <div className='flex gap-4 items-center '>
                                                <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                                <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                                <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                            </div>

                                            <div className='flex jutify-start items-center gap-4'>
                                                <hr className='w-[26px] border-1' />
                                                <button>
                                                    <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* text submit */}
                        <div className='w-full h-[150px] flex flex-col border-t'>
                            <div className='w-full h-2/3 border-b flex flex-col'>
                                <div className='w-full h-1/2 flex justify-between items-center px-3'>
                                    <div className='flex gap-3'>
                                        <button>
                                            <svg aria-label="Thích" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thích</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                        </button>
                                        <button>
                                            <svg aria-label="Bình luận" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bình luận</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </button>
                                        <button>
                                            <svg aria-label="Chia sẻ bài viết" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Chia sẻ bài viết</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                        </button>
                                    </div>

                                    <div>
                                        <button>
                                            <svg aria-label="Lưu" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Lưu</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                        </button>
                                    </div>
                                </div>

                                <div className='w-full h-1/2 px-3 flex items-center'>
                                    <span className='text-sm font-medium'>33 lượt thích </span>
                                </div>
                            </div>
                            <div className='w-full h-1/3 flex justify-between items-center px-3'>
                                <div className='h-full w-[54px] flex justify-start items-center'>
                                    <button className=''>
                                        <svg aria-label="Biểu tượng cảm xúc" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Biểu tượng cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                    </button>
                                </div>
                                <input type="text" className='h-full w-full focus:outline-none' placeholder='Thêm bình luận...' />
                                <div className='h-full w-[60px] flex justify-center items-center'>
                                    <button className='text-blue-500 text-md font-semibold'>
                                        Đăng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default ProfileFriend
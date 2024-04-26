
const ChatList = () => {
    return (
        <div className="w-[398px] h-full border-r  flex flex-col">
            <div className="w-full flex justify-between items-center px-9 py-8">
                <button>
                    <span className="text-xl font-serif font-bold">Dong_ngy</span>
                </button>

                <button>
                    <svg aria-label="Tin nhắn mới" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tin nhắn mới</title><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                </button>
            </div>

            <div className="w-full h-full flex-1 flex flex-col ">
                <div className="flex justify-between items-center px-9 py-1">
                    <button>
                        <span className="text-md font-sans font-semibold">Tin nhắn </span>
                    </button>
                    <button>
                        <span className="text-md font-sans font-semibold">Đang chờ </span>
                    </button>
                </div>

                <div className="w-full h-full flex-1 overflow-auto relative ">
                    <button className="w-full h-[73px] focus:bg-gray-100 flex py-1 px-9 items-center justify-start gap-3  ">
                        <div className="w-[56px] h-[56px] relative overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="https://scontent.cdninstagram.com/v/t51.2885-19/429457662_768668851422264_4514231864000277042_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=iCfEtEGTEV0Ab4QXTyT&_nc_ht=scontent.cdninstagram.com&oh=00_AfCUmxOKA2-6m5qrZ6RZSajV2KWrouvCmW197rYts3NQ7w&oe=66310F40" alt="" />
                        </div>

                        <div className="flex flex-col items-start ">
                            <span className="text-[14px]">Đạt lê</span>
                            <span className="text-[12px] text-gray-500">Hoạt động 4 giờ trước</span>
                        </div>
                    </button>
                    <button className="w-full h-[73px] focus:bg-gray-100 flex py-1 px-9 items-center justify-start gap-3 ">
                        <div className="w-[56px] h-[56px] relative overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="https://scontent.cdninstagram.com/v/t51.2885-19/429457662_768668851422264_4514231864000277042_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=iCfEtEGTEV0Ab4QXTyT&_nc_ht=scontent.cdninstagram.com&oh=00_AfCUmxOKA2-6m5qrZ6RZSajV2KWrouvCmW197rYts3NQ7w&oe=66310F40" alt="" />
                        </div>

                        <div className="flex flex-col items-start ">
                            <span className="text-[14px]">Đạt lê</span>
                            <span className="text-[12px] text-gray-500">Hoạt động 4 giờ trước</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ChatList
import { useContext, useEffect } from "react"
import Icon from "../../components/common/Icon"
import { AppContext } from "../../context/AppProvider"
import ChatList from "../../components/chat/ChatList"
import FriendMessage from "../../components/chat/FriendMessage"
import MyMessage from "../../components/chat/MyMessage"
import { useRef } from "react"

const Chat = () => {
    const {
        setSidebarMini,
        contentMessage,
        setContentMessage,
        icon,
        setIcon
    } = useContext(AppContext)

    const boxChat: any = useRef(null)

    // add icon in contentMessage
    const addIconInInputMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setContentMessage(`${contentMessage} ${e.currentTarget.dataset.icon}`)
    }

    // change message
    const changeValueMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContentMessage(e.target.value)
    }
    console.log(contentMessage);

    useEffect(() => {
        // using sidebar mini
        setSidebarMini(true)
        // new mess 
        if (boxChat.current) {
            boxChat.current.scrollTop = boxChat.current.scrollHeight;
        }
    }, [])
    return (
        <div className=' w-full h-screen overflow-auto relative flex'>
            <ChatList />

            <div className="w-full h-screen flex flex-col  flex-1 relative">
                <div className="w-full h-[76px] border-b flex justify-between items-center px-4">
                    <button className="w-full h-full flex items-center justify-start gap-3  ">
                        <div className="w-[44px] h-[44px] relative overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="https://scontent.cdninstagram.com/v/t51.2885-19/429457662_768668851422264_4514231864000277042_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=iCfEtEGTEV0Ab4QXTyT&_nc_ht=scontent.cdninstagram.com&oh=00_AfCUmxOKA2-6m5qrZ6RZSajV2KWrouvCmW197rYts3NQ7w&oe=66310F40" alt="" />
                        </div>

                        <div className="flex flex-col items-start ">
                            <span className="text-[15px] font-sans font-medium">Đạt lê</span>
                            <span className="text-[12px] text-gray-500">Hoạt động 4 giờ trước</span>
                        </div>
                    </button>

                    <button>
                        <svg aria-label="Thông tin về cuộc trò chuyện" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thông tin về cuộc trò chuyện</title><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    </button>
                </div>

                <div ref={boxChat} className="flex-1 flex flex-col overflow-auto gap-2">
                    <div className="w-full h-[288px] flex flex-col justify-center items-center gap-2">
                        <div className="w-[96px] h-[96px] relative overflow-hidden rounded-full">
                            <img className="w-full h-full object-cover rounded-full" src="https://scontent.cdninstagram.com/v/t51.2885-19/429457662_768668851422264_4514231864000277042_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=iCfEtEGTEV0Ab4QXTyT&_nc_ht=scontent.cdninstagram.com&oh=00_AfCUmxOKA2-6m5qrZ6RZSajV2KWrouvCmW197rYts3NQ7w&oe=66310F40" alt="" />
                        </div>

                        <span className="text-xl font-semibold">Đạt Lê</span>

                        <span className="text-sm font-normal text-gray-500">đateptryhehehe Intagram</span>
                        <button className="w-[154px] h-[30px] bg-gray-300 rounded-md text-sm font-medium font-sans mt-2" >
                            xem trang cá nhân
                        </button>
                    </div>

                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />
                    {/* friends mess */}
                    <FriendMessage />
                    {/* my mess */}
                    <MyMessage />




                </div>

                <div className="w-full h-[77px] p-4">
                    <div className="w-full h-full border rounded-3xl flex justify-between items-center">
                        <div className="w-[55px] h-full flex justify-center items-center">
                            <button
                                onClick={() => setIcon(true)}
                            >
                                <svg aria-label="Chọn biểu tượng cảm xúc" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Chọn biểu tượng cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                            </button>
                        </div>

                        <input
                            className="w-full h-full flex-1 focus:outline-none "
                            type="text"
                            placeholder="Nhắn tin..."
                            value={contentMessage}
                            onChange={changeValueMessage}
                        />

                        <div className="w-[55px] h-full flex justify-center items-center">
                            <button>
                                <svg aria-label="Thêm ảnh hoặc video" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thêm ảnh hoặc video</title><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fillRule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* icon  */}
                {
                    icon && (
                        <Icon action={addIconInInputMessage} />
                    )
                }
            </div>
        </div>
    )
}

export default Chat
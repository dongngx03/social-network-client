import { ReactNode, createContext, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { io } from "socket.io-client";

export const socket = io('ws://localhost:5000')
export const AppContext = createContext({} as any)
const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarMini, setSidebarMini] = useState<boolean>(false); // change sider from medium to mini 
    const [comment, setComment] = useState<boolean>(false); // block and none tab comment
    const [user, setUser] = useState<any>(null); // save user infor
    const [icon, setIcon] = useState<Boolean>(false)
    const [contentMessage, setContentMessage] = useState<any>("") // nội dung tin nhắn chuẩn bị gử
    // tìm kiếm
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    // chi tiết bài viết
    const [openCreatePost, setOpenCreatePost] = useState<boolean>(false)
    const [openPostDetail, setOpenPostDetail] = useState<any>({
        status: false,
        data: null,
        user: null
    })
    // soket

    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={{
                sidebarMini,
                setSidebarMini,
                comment,
                setComment,
                user,
                setUser,
                icon,
                setIcon,
                contentMessage,
                setContentMessage,
                openSearch,
                setOpenSearch,
                openCreatePost,
                setOpenCreatePost,
                openPostDetail,
                setOpenPostDetail,
            }}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </AppContext.Provider>
        </QueryClientProvider>
    )
}

export default AppProvider
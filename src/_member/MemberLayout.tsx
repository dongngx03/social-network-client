import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SideBarMini from "../components/SideBarMini";
import Comment from "../components/home/Comment";
import { AppContext } from "../context/AppProvider";
import useGetUser from "../hooks/useGetUser";
import Loading from "../components/Loading";


const MemberLayout = () => {
    const { sidebarMini, comment, setUser } = useContext(AppContext);
    const { isLoading } = useGetUser(setUser)

    if (isLoading) return <Loading />
    return (
        <div className='w-full h-screen flex z-1 relative transition-opacity'>
            {
                sidebarMini
                    ?
                    <div className='w-[74px]'>
                        <SideBarMini />
                    </div>
                    :
                    <div className='xl:w-1/5 2xl:w-1/5 lg:w-[74px] md:w-[74px] sm:w-[74px]'>
                        <SideBar />
                    </div>
            }

            <div className='w-4/5 lg:w-full md:w-full sm:w-full'>
                <Outlet />
            </div>

            {comment ? <Comment /> : ""}
        </div>
    )
}

export default MemberLayout
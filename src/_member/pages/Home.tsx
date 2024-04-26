import { useContext, useEffect } from "react"
import FriendsList from "../../components/home/FriendsList"
import FriendsSuggest from "../../components/home/FriendsSuggest"
import Post from "../../components/home/Post"
import { AppContext } from "../../context/AppProvider"

const Home = () => {
    const { setSidebarMini } = useContext(AppContext)
    useEffect(() => {
        setSidebarMini(false);
    }, [])
    return (
        <div className='w-full h-full overflow-auto'>
            <div className='w-full flex '>
                <div className="w-2/3 h-full flex flex-col">
                    <div className="friendList">
                        <FriendsList />
                    </div>

                    <div className="Post">
                        <Post />
                    </div>

                </div>

                <div className="w-1/3 h-full">
                    <FriendsSuggest />
                </div>
            </div>
        </div>
    )
}

export default Home

import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";

const CreatePost = () => {
    const { setSidebarMini } = useContext(AppContext)
    useEffect(() => {
        setSidebarMini(false);
    }, [])
    return (
        <div className="w-full h-full overflow-auto  p-16 ">
            <div className="w-full h-full flex rounded-xl shadow-2xl">
                <div className="w-1/2 h-full">
                    <img
                        className="w-full h-full object-contain"
                        src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                    />
                </div>

                <div className="w-1/2 h-full">

                </div>
            </div>
        </div>
    )
}

export default CreatePost
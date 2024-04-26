// bảng icon

import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"
import iconList from "../../utils/iconEmoji"


const Icon = ({ action }: { action: any }) => {
    const { setIcon } = useContext(AppContext)
    return (
        <div className="absolute w-[342px] h-[327px] border-t rounded-md shadow-lg overflow-auto bottom-[76px] left-5 bg-white p-4">
            <button
                className="absolute top-2 right-2"
                onClick={() => setIcon(false)}
            >
                <svg aria-label="Đóng" className="x1lliihq x1n2onr6 x9bdzbf w-4" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Đóng</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            </button>
            <div className="w-full h-full ">
                {
                    iconList.map((item: any, index: number) => (
                        <button
                            key={index}
                            className="w-[35px] h-[35px]"
                            data-icon={item}
                            onClick={action}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Icon
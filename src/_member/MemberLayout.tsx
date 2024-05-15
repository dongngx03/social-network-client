import { Image, Modal, Spin, message } from "antd";
import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import SideBarMini from "../components/SideBarMini";
import Icon from "../components/common/Icon";
import Comment from "../components/home/Comment";
import { AppContext } from "../context/AppProvider";
import { createPost } from "../hooks/post";
import uploadFile from "../hooks/uploadFile";
import useGetUser from "../hooks/useGetUser";


const MemberLayout = () => {
    const {
        sidebarMini,
        comment,
        setUser,
        user,
        openCreatePost,
        setOpenCreatePost,
        icon,
        setIcon
    } = useContext(AppContext);
    const { isLoading } = useGetUser(setUser)
    // ảnh demo
    const [imgUrl, setImgUrl] = useState<string>('')
    const [file, setFile] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [loadingPost, setLoadingPost] = useState<boolean>(false)

    const addIconInContent = (e: React.MouseEvent<HTMLButtonElement>) => {
        setContent(`${content} ${e.currentTarget.dataset.icon}`)
    }
    // thêm bài viết
    const handerCreatePost = async () => {
        if (!file && !content) {
            message.open({
                type: "error",
                content: "Chưa có bất kỳ ảnh và nội dung nào !"
            })
        } else {
            // tải ảnh lên server 
            await uploadFile(
                "dygixfuh9",
                "NNshop",
                "social-network",
                file,
                setLoadingPost
            )
                .then((imageArr) => createPost({
                    imageUrl: imageArr,
                    sourceId: user?.user?.id,
                    postContent: content
                }, setLoadingPost))
                .then((res) => {
                    if (res.status === 201) {
                        message.open({
                            type: "success",
                            content: "Thêm bài viết thành công"
                        })

                        setOpenCreatePost(false)
                    } else {
                        message.open({
                            type: "error",
                            content: "Máy chủ đang lỗi vui lòng chờ 10 phút rồi thử lại"
                        })
                    }
                })
        }
    }
    console.log(user);


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
            {/* comment */}
            {comment ? <Comment /> : ""}

            {/* create post */}
            <Modal
                open={openCreatePost}
                onCancel={() => {
                    setOpenCreatePost(false)
                    setFile("")
                    setContent("")
                    setImgUrl("")
                }}
                width={1000}
                onOk={() => handerCreatePost()}
            >
                {
                    loadingPost
                        ? <div className="w-full h-[400px] flex justify-center items-center">
                            <Spin />
                        </div>
                        : <div className="flex flex-col">
                            <div className="w-full border-b py-3">
                                <span className="text-xl font-sans font-medium"> Thêm Bài viết Mới</span>
                            </div>

                            <div className="w-full h-[400px] flex gap-1">
                                <div className="w-1/2 h-full overflow-hidden flex justify-center items-center bg-gray-100">
                                    {
                                        file ?
                                            <Image
                                                src={imgUrl}
                                                className="w-full h-full object-cover"
                                            />
                                            :
                                            <span className="text-xl text-gray-400">Chưa có ảnh nào</span>
                                    }
                                </div>

                                <div className="w-1/2 h-full flex flex-col">
                                    <div className="w-full flex justify-start items-center gap-2 p-2">
                                        <img className="w-[30px] h-[30px] rounded-full object-cover" src={user?.user?.avatar} alt="" />
                                        <span className="font-sans font-semibold text-md">{user?.user?.nickname}</span>
                                    </div>

                                    <div className="w-full flex-1 h-full flex flex-col gap-1">
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-full h-2/3 focus:outline-none rounded-xl p-3 "
                                            placeholder="Viết chú thích..."
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                        >
                                        </textarea>
                                        <div className="w-full h-auto py-2 border-b relative">
                                            <button
                                                className="flex justify-start gap-2 items-center "
                                                onClick={() => setIcon(!icon)}
                                            >
                                                <svg aria-label="Chọn biểu tượng cảm xúc" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Chọn biểu tượng cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                                <span>Biểu tượng cảm xúc</span>
                                            </button>
                                            {
                                                icon && <Icon action={addIconInContent} />
                                            }
                                        </div>
                                        <input
                                            type="file"
                                            multiple
                                            className=" py-2 block w-full text-sm text-gray-900 border border-none rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            onChange={(e: any) => {
                                                setFile(e.target.files)
                                                setImgUrl(URL.createObjectURL(e.target.files[0]))
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                }
            </Modal>
        </div>
    )
}

export default MemberLayout
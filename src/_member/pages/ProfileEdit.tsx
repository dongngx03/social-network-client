import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { Link } from "react-router-dom";
import { Select, Input, Modal, message } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import formUser from "../../interface/formUser";
import { useMutation } from "@tanstack/react-query";
import instance from "../../services/instance";
import Loading from "../../components/Loading";
import axios from "axios";
import { Image } from 'antd';


const ProfileEdit = () => {
    const { setSidebarMini, user } = useContext(AppContext)
    const { register, handleSubmit, control, reset } = useForm<formUser>()
    const [isModalOpen, setIsModalOpen] = useState<{
        status: boolean,
        newInfor: null | any
    }>({
        status: false,
        newInfor: null
    })
    const [isModalUpload, setIsModalUpload] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const [messageResult, setMessageResult] = useState({} as any)
    const [file, setFile] = useState("")
    const [imgUrl, setImgUrl] = useState('');

    const { mutate, isPending } = useMutation({
        mutationFn: async (data: formUser) => {
            try {
                const res = await instance.put(`/v1/api/user/${user?.user?.id}`, data)
                return res

            } catch (error: any) {
                return error
            }
        },
        onSuccess: (data) => {
            setMessageResult(data)
        }
    })

    useEffect(() => {
        setSidebarMini(false);
        reset({ ...user?.user, birtday: user?.user?.birtday.split("T")[0] })
    }, [])

    useEffect(() => {
        if (messageResult?.status === 200) {
            messageApi.open({
                type: 'success',
                content: messageResult.data.message,
            });
        }

        if (messageResult?.response?.status === 400) {
            messageApi.open({
                type: 'error',
                content: messageResult?.response?.data?.message,
            });
        }
    }, [messageResult])

    const onSubmit: SubmitHandler<formUser> = (data: any) => {
        const { id, following_1, following_2, _count, ...rest } = data
        setIsModalOpen({
            status: true,
            newInfor: { ...rest }
        })
    }

    const changeUserInfor = async () => {
        console.log(isModalOpen.newInfor);
        mutate(isModalOpen.newInfor)
        setIsModalOpen({
            status: false,
            newInfor: null
        })
    }

    const uploadFile = async () => {
        const CLOUND_NAME = "dygixfuh9"
        const PRESET_NAME = "NNshop"
        const FOLDER_NAME = "social-network"
        const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`
        const formData = new FormData()
        formData.append("upload_preset", PRESET_NAME)
        formData.append("folder", FOLDER_NAME)
        if (file) {
            formData.append("file", file)
            await axios.post(api, formData)
                .then(async (res) => {
                    try {
                        await instance.put(`/v1/api/user/update-avatar/${user?.user?.id}`, { avatar: res.data.url })
                    } catch (error) {
                        console.log(error);
                    }
                })
                .then(() => messageApi.open({
                    type: 'success',
                    content: "Cập nhật ảnh đại diện thành công",
                }))
                .then(() => {
                    setIsModalUpload(false)
                    setFile("")
                })

        } else {
            messageApi.open({
                type: 'error',
                content: "Vui lòng chọn file",
            });
        }
    }

    if (isPending) return <><Loading /></>
    return (
        <div className="w-full h-full flex">
            {contextHolder}
            <div className="w-[332px] h-full overflow-auto border-r flex flex-col gap-3 px-6">
                <div className="w-full h-auto text-start py-11 px-7">
                    <span className="text-xl font-sans font-bold">Cài đặt</span>
                </div>

                <Link to={""} className="flex justify-start items-center gap-2 px-3 bg-gray-300 py-3 rounded-md">
                    <span>
                        <svg aria-label="" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title></title><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle><path d="M18.793 20.014a6.08 6.08 0 0 0-1.778-2.447 3.991 3.991 0 0 0-2.386-.791H9.38a3.994 3.994 0 0 0-2.386.791 6.09 6.09 0 0 0-1.779 2.447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle></svg>
                    </span>
                    <span className="font-sans text-sm ">
                        Chỉnh sửa trang cá nhân
                    </span>
                </Link>
            </div>

            <div className="w-full flex-1 h-full overflow-auto flex flex-col px-14 py-11 gap-6">
                <span className="text-xl font-sans font-bold">Chỉnh sửa trang cá nhân</span>

                <div className="w-full h-auto flex justify-between items-center bg-[#EFEFEF] px-4 py-4 rounded-2xl">
                    <div className="flex justify-start items-center gap-3">
                        <div className="w-[56px] h-[56px] rounded-full relative overflow-hidden flex justify-center items-center">
                            <Image
                                className=" w-full h-full rounded-full object-cover "
                                src={user?.user?.avatar}
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-base font-sans font-bold">{user?.user?.nickname}</span>
                            <span className="text-sm font-sans text-[#737373]">{`${user?.user?.fistname} ${user?.user?.lastname}`}</span>
                        </div>
                    </div>

                    <button
                        className="bg-[#0095F6] px-3 rounded-lg py-1 text-white"
                        onClick={() => setIsModalUpload(!isModalUpload)}
                    >
                        Đổi ảnh
                    </button>
                </div>

                <form
                    action=""
                    className="w-full h-auto flex flex-col gap-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-3">
                        <span className="text-md font-sans font-bold">
                            Biệt danh
                        </span>
                        <input
                            className="w-full h-11 rounded-xl border focus:outline-none p-2  hover:bg-slate-100"
                            type="text"
                            placeholder="Biệt danh ..."
                            {...register("nickname")}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-md font-sans font-bold">
                            Họ
                        </span>
                        <input
                            className="w-full h-11 rounded-xl border focus:outline-none p-2 hover:bg-slate-100 "
                            type="text"
                            placeholder="Họ hoặc tên đệm ..."
                            {...register("fistname")}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-md font-sans font-bold">
                            Tên
                        </span>
                        <input
                            className="w-full h-11 rounded-xl border focus:outline-none p-2  hover:bg-slate-100"
                            type="text"
                            placeholder="Tên ..."
                            {...register("lastname")}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-md font-sans font-bold">
                            Giới tính
                        </span>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    defaultValue="Chọn giới tính ..."
                                    className="w-full"
                                    options={[
                                        { value: 'MALE', label: 'NAM' },
                                        { value: 'FEMALE', label: 'NỮ' },
                                    ]}
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-md font-sans font-bold">
                            Sinh nhật
                        </span>
                        <Controller
                            name="birtday"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Input
                                    placeholder="Chọn ngày..."
                                    type="date"
                                    {...field}
                                />
                            )}
                        />
                    </div>

                    <div className="flex justify-end gap-3 py-5">
                        <button className="px-20 py-3 bg-[#0095F6] text-white font-sans font-semibold rounded-xl">
                            Gửi
                        </button>
                    </div>
                </form>
            </div>

            <Modal
                title="Xác nhận thông tin"
                open={isModalOpen.status}

                onCancel={() => setIsModalOpen({
                    status: false,
                    newInfor: null
                })}

                onOk={changeUserInfor}
            >
                <div className="flex flex-col gap-3 p-2">
                    <div className="flex justify-start items-center gap-3">
                        <div className="w-[56px] h-[56px] rounded-full relative overflow-hidden">
                            <img className=" w-full h-full rounded-full object-cover " src={user?.user?.avatar} alt="" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-base font-sans font-bold">{isModalOpen?.newInfor?.nickname ? isModalOpen?.newInfor?.nickname : user?.user?.nickname}</span>
                            <span className="text-sm font-sans text-[#737373]">{`${isModalOpen?.newInfor?.fistname ? isModalOpen?.newInfor?.fistname : user?.user?.fistname} ${isModalOpen?.newInfor?.lastname ? isModalOpen?.newInfor?.lastname : user?.user?.lastname}`}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 px-16">
                        <span className="text-md font-sans text-[#737373]">
                            Giới tính : {isModalOpen?.newInfor?.gender ? isModalOpen?.newInfor?.gender : user?.user?.gender}
                        </span>
                        <span className="text-md font-sans text-[#737373]">
                            Sinh nhật : {isModalOpen?.newInfor?.birtday ? isModalOpen?.newInfor?.birtday : user?.user?.birtday.split('T')[0]}
                        </span>
                    </div>
                </div>
            </Modal>

            <Modal
                title="Chọn file ảnh mình muốn làm ảnh đại diện"
                open={isModalUpload}
                onCancel={() => setIsModalUpload(false)}
                onOk={uploadFile}
            >
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                        onChange={(e: any) => {
                            setFile(e.target.files[0])
                            setImgUrl(URL.createObjectURL(e.target.files[0]))
                        }}
                    />

                    <div className="w-full flex justify-center items-center p-5">
                        {
                            imgUrl
                            &&
                            <div className="w-[100px] h-[100px]" >
                                <img className="w-full h-full object-contain" src={imgUrl} alt="" />
                            </div>
                        }
                    </div>
                </div>

            </Modal>

        </div>
    )
}

export default ProfileEdit
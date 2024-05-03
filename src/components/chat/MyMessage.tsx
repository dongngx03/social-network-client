
const MyMessage = () => {
    return (

        <div className="w-full h-auto pr-5 flex justify-end items-center">
            <div className="w-2/3 py-2">
                <div className="w-full px-3 group flex justify-end items-center gap-1 ">

                    <div className=" group-hover:block hidden ">
                        <button>
                            <svg aria-label="Bày tỏ cảm xúc" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Bày tỏ cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                        </button>

                        <button className="pl-2">
                            <svg aria-label="Trả lời" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Trả lời</title><path d="M14 8.999H4.413l5.294-5.292a1 1 0 1 0-1.414-1.414l-7 6.998c-.014.014-.019.033-.032.048A.933.933 0 0 0 1 9.998V10c0 .027.013.05.015.076a.907.907 0 0 0 .282.634l6.996 6.998a1 1 0 0 0 1.414-1.414L4.415 11H14a7.008 7.008 0 0 1 7 7v3.006a1 1 0 0 0 2 0V18a9.01 9.01 0 0 0-9-9Z"></path></svg>
                        </button>

                        <button className="pl-2">
                            <svg aria-label="Xem thêm" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Xem thêm</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="6" r="1.5"></circle><circle cx="12" cy="18" r="1.5"></circle></svg>
                        </button>
                    </div>
                    <span className="group-hover:hidden block ml-2 font-sans text-[12px] text-[#65676B]"> 09:16 </span>
                    <span className=" text-white bg-[#3797F0]  w-auto h-auto break-all py-2 px-3 rounded-lg font-sans text-[15px]">
                        bạn có thể cho mình làm quen được không ?
                    </span>
                </div>
            </div>
        </div>

    )
}

export default MyMessage
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { Link } from "react-router-dom";

const Comment = () => {
    const { comment, setComment } = useContext(AppContext)
    const handleContainerClick = (e: any) => {
        // Kiểm tra xem sự kiện click có phát sinh từ thẻ lớn nhất hay không
        if (e.target.classList.contains('comment-container')) {
            // Nếu phát sinh từ thẻ lớn nhất, thực thi setComment()
            setComment(!comment);
        }
    }
    return (
        <div
            className='comment-container z-99 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 scroll-smooth transition-opacity flex justify-center items-center '
            onClick={handleContainerClick}
        >
            <div className='xl:w-[1000px] xl:h-[586px] 2xl:w-[1000px] 2xl:h-[586px] flex justify-center lg:w-[870px] lg:h-[450px] md:w-[650px] md:h-[400px] z-100'>
                <div className='w-1/2 h-full relative overflow-hidden bg-black '>
                    <div className='w-full h-full relative overflow-auto flex justify-center items-center mt-3 scrollbarNone'>
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                    </div>
                </div>

                <div className='w-1/2 bg-white flex flex-col justify-between'>
                    {/* profile */}
                    <div className='w-full h-[60px] flex justify-between items-center px-3 py-3 border-b '>
                        <Link to={""} className='flex gap-2 justify-start items-center'>
                            <div className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                            </div>
                            <div className='grid'>
                                <span className='text-[14px] font-semibold'>dongy_03</span>
                                <span className='text-[12px] font-light text-gray-500'>Đông nguyễn</span>
                            </div>
                        </Link>

                        <Link to={""} className='text-xs font-semibold'>
                            <svg aria-label="Tùy chọn khác" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Tùy chọn khác</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </Link>
                    </div>
                    {/* comment */}
                    <div className='w-full h-4/6 relative overflow-auto px-3 scrollbarNone'>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment item */}
                        <div className='pt-3'>
                            <div className='flex gap-3 justify-start'>
                                <Link to={"/"} className='w-[42px] h-[42px] rounded-full relative overflow-hidden'>
                                    <img className='w-full h-full rounded-full object-cover' src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/429480273_2063300667374136_2742581894874499461_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IrlsCgRjxiQAb4yYS14&_nc_ht=scontent.fhan5-6.fna&oh=00_AfC5q6KVQZqvqP7xRGLeQjR56B8h-W1Dj9geCFNJyfZP7w&oe=66253ED9" alt="" />
                                </Link>
                                <div className=''>
                                    <div className='w-80 flex flex-col gap-2'>
                                        <div>
                                            <Link to={"/"} className='text-[14px] font-semibold'>dongy_03</Link>
                                            <span className='ml-2 text-sm font-normal '>cô ấy thật tuyệ vời đúng không hả các cậu , thật sự là như vậy đấy </span>
                                        </div>

                                        <div className='flex gap-4 items-center '>
                                            <span className='text-xs font-light text-[#737373]'>1 tuần</span>
                                            <span className='text-xs font-semibold text-[#737373]'>8 lượt thích</span>
                                            <span className='text-xs font-semibold text-[#737373]'>trả lời</span>
                                        </div>

                                        <div className='flex jutify-start items-center gap-4'>
                                            <hr className='w-[26px] border-1' />
                                            <button>
                                                <span className='text-xs font-semibold text-[#737373]'>xem câu trả lời (19)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* text submit */}
                    <div className='w-full h-[150px] flex flex-col border-t'>
                        <div className='w-full h-2/3 border-b flex flex-col'>
                            <div className='w-full h-1/2 flex justify-between items-center px-3'>
                                <div className='flex gap-3'>
                                    <button>
                                        <svg aria-label="Thích" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thích</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                    </button>
                                    <button>
                                        <svg aria-label="Bình luận" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bình luận</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    </button>
                                    <button>
                                        <svg aria-label="Chia sẻ bài viết" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Chia sẻ bài viết</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </button>
                                </div>

                                <div>
                                    <button>
                                        <svg aria-label="Lưu" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Lưu</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </button>
                                </div>
                            </div>

                            <div className='w-full h-1/2 px-3 flex items-center'>
                                <span className='text-sm font-medium'>33 lượt thích </span>
                            </div>
                        </div>
                        <div className='w-full h-1/3 flex justify-between items-center px-3'>
                            <div className='h-full w-[54px] flex justify-start items-center'>
                                <button className=''>
                                    <svg aria-label="Biểu tượng cảm xúc" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Biểu tượng cảm xúc</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                </button>
                            </div>
                            <input type="text" className='h-full w-full focus:outline-none' placeholder='Thêm bình luận...' />
                            <div className='h-full w-[60px] flex justify-center items-center'>
                                <button className='text-blue-500 text-md font-semibold'>
                                    Đăng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Comment
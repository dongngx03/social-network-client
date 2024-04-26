import { useContext } from "react"
import { AppContext } from "../../context/AppProvider"
import { Link } from "react-router-dom"

const Post = () => {
    const { setComment, comment } = useContext(AppContext)

    return (
        <div className='w-full lg:pl-11 md:pl-11 sm:pl-11 2xl:flex xl:flex flex-col justify-center items-center '>
            {/* new */}
            <div className='w-[472px] border-b mt-5'>
                <div className='w-full flex justify-between items-center'>
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

                <div className='w-full h-[584px] relative overflow-hidden'>
                    <div className='w-full h-[584px] relative overflow-auto bg-black flex justify-center items-center mt-3 rounded-md border'>
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                    </div>
                </div>

                <div className='w-full flex justify-between items-center py-3'>
                    <div className='flex gap-4 justify-start items-center'>
                        <button>
                            <svg aria-label="Thích" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thích</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        </button>

                        <button onClick={() => setComment(!comment)}>
                            <svg aria-label="Bình luận" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bình luận</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                    </div>

                    <button>
                        <svg aria-label="Lưu" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Lưu</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    </button>


                </div>

                <div className='w-full '>
                    <span className='text-sm font-medium '> 33 lượt thích</span>
                </div>

                <div className='w-full flex items-center justify-start gap-1 pb-5'>
                    <Link className='text-sm font-semibold' to={""}>Dong_ngy</Link>
                    <span className='text-sm w-[200px] truncate'>dong_ngy vvvvvvvvvvvvvvvvcccccccccccc</span>
                </div>

            </div>
            {/* new */}
            <div className='w-[472px] border-b mt-5'>
                <div className='w-full flex justify-between items-center'>
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

                <div className='w-full h-[584px] relative overflow-hidden'>
                    <div className='w-full h-[584px] relative overflow-auto bg-black flex justify-center items-center mt-3 rounded-md border'>
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                        <img className='w-full h-full object-contain' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/426192089_2053690345001835_3699232507412022357_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tx32iT7KyGUAb5iaWl7&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAXLyteMRCVjuXTJOf9XJV9_XBaK9-IKIqn0d4fJABocw&oe=6627CC2B" alt="" />
                    </div>
                </div>

                <div className='w-full flex justify-between items-center py-3'>
                    <div className='flex gap-4 justify-start items-center'>
                        <button>
                            <svg aria-label="Thích" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Thích</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        </button>

                        <button>
                            <svg aria-label="Bình luận" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bình luận</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                    </div>

                    <button>
                        <svg aria-label="Lưu" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Lưu</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    </button>


                </div>

                <div className='w-full '>
                    <span className='text-sm font-medium '> 33 lượt thích</span>
                </div>

                <div className='w-full flex items-center justify-start gap-1 pb-5'>
                    <Link className='text-sm font-semibold' to={""}>Dong_ngy</Link>
                    <span className='text-sm w-[200px] truncate'>dong_ngy vvvvvvvvvvvvvvvvcccccccccccc</span>
                </div>

            </div>
        </div>
    )
}

export default Post
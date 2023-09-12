import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

export default function Blog({ blog, handleAddToBookmarks }) {
    const { cover_Image, author_img, reading_time, author, posted_date, title, hashtags } = blog;
    // console.log(blog);
    return (
        <div className='p-10'>
            <img className=' mb-6' src={cover_Image} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-md'><FaBookmark /></button>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold py-4">{title}</h2>
            </div>
            <div>
                {
                    hashtags.map((hash, idx) => <span className='mr-4' key={idx}>{hash}</span>)
                }
            </div>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}


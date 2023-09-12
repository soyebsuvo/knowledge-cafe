import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

export default function Blogs({ handleAddToBookmarks }) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("Blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-3/4">
            <h2 className="text-3xl font-bold text-center">Blogs : {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog handleAddToBookmarks={handleAddToBookmarks} key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    )
}

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired
}

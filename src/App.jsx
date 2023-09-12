import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>

      <Header />
      <div className='md:flex my-4'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <Bookmarks bookmarks={bookmarks} />
      </div>

    </>
  )
}

export default App


// https://i.ibb.co/WHXgwWP/profile.png
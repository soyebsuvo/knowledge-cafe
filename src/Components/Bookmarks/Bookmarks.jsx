import PropTypes from 'prop-types'

import Bookmark from '../Bookmark/Bookmark';



export default function Bookmarks({ bookmarks }) {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/4 bg-slate-500 rounded-lg p-4">
            <h2 className="text-3xl font-bold text-center">Bookmarks : {bookmarks.length}</h2>
            <div className='mt-8'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
                }
            </div>
        </div>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
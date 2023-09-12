import PropTypes from 'prop-types'

export default function Bookmark({ bookmark }) {
    const { title } = bookmark;
    // console.log(bookmark)
    return (
        <div className='bg-slate-400 p-3 m-3 rounded-lg'>
            <h2 className="text-xl">{title}</h2>
        </div>
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
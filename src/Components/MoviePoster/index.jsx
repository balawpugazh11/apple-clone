import React from 'react'
import Movie_poster from '../../assets/Movie_poster_2.jpg'  

function index() {
return (
    <>
        <div className='relative w-full h-[100vh] md:h-[80vh] overflow-hidden p-4 '>
            <img src={Movie_poster} alt="Movie Poster" style={{ width: '100%' }} />
        </div>
    </>
)
}

export default index
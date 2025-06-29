import React from 'react'
import Movie_poster from '../../assets/Movie_poster_2.jpg'  

function index() {
return (
    <>
        <div>
            <img src={Movie_poster} alt="Movie Poster" style={{ width: '100%' }} />
        </div>
    </>
)
}

export default index
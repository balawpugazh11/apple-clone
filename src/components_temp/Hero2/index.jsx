import React from 'react'
import heroBg from "../../assets/hero_2_max.jpg"; // Optional: your repeating background

function index() {
return (
    <section>
       <div
           className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
           style={{ backgroundImage: `url(${heroBg})` }}
       >
        <button className='bg-white text-black py-2 px-4 rounded-[1.5rem] absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          Learn more
        </button>
       </div>
    </section>
)
}

export default index
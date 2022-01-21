import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => (
    <div className="flex">
        <h1
            className='text-black font-extrabold font-inter text-xl sm:text-2xl mt-2 mr-1'>
                &#62;
        </h1>
        <ReactRotatingText 
            className='font-extrabold font-inter text-xl sm:text-2xl mt-2'
            items={[` I'm Software developer 💻`,
                	` UX / UI developer 👨‍💻`,
                    ` Professional designer 📐`,
                    ` Cryptocurrency investor ₿ 🪙`,
                    ` Competitive gamer 🏆`,
                    ``,]}
            color='#000000' 
            emptyPause={1}
        />
    </div>
)
 
export default RotatingText;
import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => (
    <div className="flex">
        <h1
            className='text-white font-thin text-xl sm:text-2xl mt-2 mr-1'>
                &#62;
        </h1>
        <ReactRotatingText 
            className='font-thin text-xl sm:text-2xl mt-2'
            items={[` Software developer 💻`,
                    ` Professional designer 📐`,
                    ` Cryptocurrency investor ₿ 🪙`,
                    ` Competitive gamer 🏆`,
                    ``,]}
            color='#ffffff' 
        />
    </div>
)
 
export default RotatingText;
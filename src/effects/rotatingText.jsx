import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => (
    <div className="flex">
        <h1
            className='text-white font-thin text-2xl mt-5 mr-1'>
                &#62;
        </h1>
        <ReactRotatingText 
            className='font-thin text-2xl mt-5'
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
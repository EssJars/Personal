import React from 'react'
import ProfileImg from '../images/Profile.jpg'

const Profile = () => (
    <section className='relative w-full grid content-center'>
        <div className='flex justify-end sm:w-11/12 desktop:w-5/6'>
            <img
                src={ProfileImg}
                alt="some value"
                className='w-96 h-96 rounded-full drop-shadow-3xl'
            />
        </div>
    </section>
)
 
export default Profile;
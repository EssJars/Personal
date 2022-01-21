import React from 'react';
import Header from './components/header'
import RotatingText from './effects/rotatingText';
import Profile from './effects/ProfileImg';
// import BgImg from './images/Profile.jpg'

function App() {
  return (
    <div className="bg-white text-black w-full h-screen">
      < Header />
      <div className='absolute w-full h-screen flex justify-center sm:justify-end'>
        {/* <img 
            src={BgImg} 
            alt='some value'  
            className="bg-black sm:h-screen z-0 blur-xs sm:blur-sm desktop:blur-md" 
        /> */}
        <Profile />
      </div>
      <div className="relative desktop:w-8/12 h-screen grid content-center">
        <div className="sm:ml-32 desktop:ml-28">
          <div
            className="w-full z-10"
          >
            <h1
              className="text-6xl sm:text-7xl
                        flex justify-center sm:justify-between 
                        desktop:text-5xl font-inter 
                        font-extrabold"
            >
             Hola! 
            </h1>
            <h1
              className="text-6xl sm:text-7xl 
              desktop:text-7xl font-inter 
              font-extrabold"
            >
              Soy <font className="text-themeBlue">Angel Ramirez</font>
            </h1>
          </div>
          <div className='flex justify-center sm:justify-between mb-10'>
              <RotatingText/>
          </div>
          <div className='z-10'>
            <button
              className="hover:bg-transparent bg-themeBlue 
              hover:text-themeBlue font-semibold text-white 
              py-2 px-8 border hover:border-themeBlue 
              border-transparent rounded-full
              transition ease-in-out duration-500"
            >
              Mostrar CV
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

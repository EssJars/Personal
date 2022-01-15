import React from 'react';
import Header from './components/header'
import AngelImg from './images/web.jpg'
import RotatingText from './effects/rotatingText';

function App() {
  return (
    <div className="bg-themeDarkBlue w-full h-screen">
      < Header />
      <div className='absolute w-full h-screen flex justify-center sm:justify-end'>
        {/* <img 
            src={AngelImg} 
            alt='some value'  
            className="bg-black sm:h-screen z-0 blur-xs sm:blur-sm desktop:blur-md" 
        /> */}
      </div>
      <div className="w-full h-screen grid content-center sm:content-end desktop:content-end">
        <div className="flex sm:mb-32 sm:ml-32 desktop:mb-32 desktop:ml-32">
          <div
            className="desktop:w-1/2 w-full z-10"
          >
            <h1
              className="text-themeBlue flex justify-center sm:justify-between
                          text-6xl sm:text-6xl desktop:text-7xl 
                          font-inter font-extrabold"
            >
              ÁNGEL
            </h1>
            <h1
              className="text-white text-6xl sm:text-7xl
                        flex justify-center sm:justify-between 
                        desktop:text-8xl font-inter 
                        font-extrabold"
            >
              RAMIREZ
            </h1>
            <div className='flex justify-center sm:justify-between'>
              <RotatingText/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

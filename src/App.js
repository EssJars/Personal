import React from 'react';
import Header from './components/header'
import AngelImg from './images/web.jpg'
import RotatingText from './effects/rotatingText';

function App() {
  return (
    <div className="bg-black w-full h-screen">
      < Header />
      <div className='absolute w-full h-screen flex justify-center sm:justify-end'>
        <img 
            src={AngelImg} 
            alt='some value'  
            className="bg-black sm:h-screen z-0 blur-xs sm:blur-sm desktop:blur-md" 
        />
      </div>
      <div className="w-full h-screen grid sm:content-center desktop:content-end">
        <div className="flex desktop:ml-36 ml-10 h-full">
          <div className="desktop:w-4/6 w-full grid content-end mb-48 sm:mb-0 desktop:mb-40 z-10">
            <h1 className="text-themeBlue text-2xl desktop:text-4xl font-ubuntu font-extrabold">HOLA!</h1>
            <h1 className="text-white text-5xl sm:text-6xl desktop:text-7xl font-ubuntu font-extrabold">SOY ÁNGEL</h1>
            <RotatingText/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

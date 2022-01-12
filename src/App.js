import React from 'react';
import Header from './components/header'
import AngelImg from './images/web.jpg'
import RotatingText from './effects/rotatingText';

function App() {
  return (
    <div className="bg-black w-full h-screen">
      < Header />
      <div className="w-full h-screen grid content-center">
        <div className="flex ml-36 h-full">
          <div className="w-4/6 grid content-end my-72 z-10">
            <h1 className="text-themeBlue text-4xl font-ubuntu font-extrabold">HOLA!</h1>
            <h1 className="text-white text-7xl font-ubuntu font-extrabold">SOY ÁNGEL</h1>
            <RotatingText/>
          </div>
          <img src={AngelImg} alt='some value'  className="bg-white h-screen z-0 blur-xs" />
        </div>
      </div>
    </div>
  );
}

export default App;

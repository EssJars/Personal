import React from 'react'

const Header = () => (
    <div className="w-full h-36 grid gap-4 content-center">
        <div className="mr-16 ml-16">
            <div className="flex justify-between">
                <div className="text-white">
                    <h1 className="text-2xl font-ubuntu font-extrabold">PORTAFOLIO</h1>
                </div>
                <div>
                    <ul className="text-white flex space-x-12 font-ubuntu ">
                        <li>
                            <h1>INICIO</h1>
                        </li>
                        <li>
                            <h1>ACERCA DE MI</h1>
                        </li>
                        <li>
                            <h1>EXPERIENCIA</h1>
                        </li>
                        <li>
                            <h1>HABILIDADES</h1>
                        </li>
                        <li>
                            <h1>CONTACTO</h1>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    </div>
)
 
export default Header;
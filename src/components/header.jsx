import React from 'react'
import Link from '../effects/hoverLink'
import LegacyierLogo from '../images/LegacierWeb.png'

const Header = () => (
    <div className="z-50 fixed w-full h-32 grid gap-4 content-center">
        <div className="sm:mx-16 mx-5">
            <div className="flex justify-between">
                <div className="text-black flex">
                    <img
                        src={LegacyierLogo}
                        alt='some value'
                        className="h-12 w-12"
                    />
                    <h1 className="text-xl font-ubuntu font-extrabold grid content-center ml-2 text-shadow">PORTAFOLIO</h1>
                </div>
                <div className="grid content-center">
                    <div className="hidden desktop:block">
                        <ul className="text-white flex space-x-12 font-ubuntu font-extrabold">
                            <li>
                                <Link
                                    url={''}
                                    text={'INICIO'}
                                />
                            </li>
                            <li>
                                <Link
                                    url={''}
                                    text={'ACERCA DE MI'}
                                />
                            </li>
                            <li>
                                <Link
                                    url={''}
                                    text={'EXPERIENCIA'}
                                />
                            </li>
                            <li>
                                <Link
                                    url={''}
                                    text={'HABILIDADES'}
                                />
                            </li>
                            <li>
                                <Link
                                    url={''}
                                    text={'CONTACTO'}
                                />
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>    
        </div>
    </div>
)
 
export default Header;
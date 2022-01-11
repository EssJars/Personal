import React from 'react'
import Link from '../effects/hoverLink'

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
)
 
export default Header;
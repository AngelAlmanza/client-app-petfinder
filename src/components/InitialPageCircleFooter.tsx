import { useEffect, useState } from 'react';
import heartSignIn from '../assets/images/heart-sign-in.png';
import { SpecialButton } from './buttons/SpecialButton';

export const InitialPageCircleFooter = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={`bg-white rounded-full flex flex-col items-center pt-10`}
      style={{
        width: screenSize,
        height: screenSize,
      }}>
        <div className="w-100">
          <SpecialButton text="Iniciar Sesión" />
        </div>
        <div className="w-44 flex justify-center">
          <img className="w-100 h-fit object-cover mt-4" src={heartSignIn} alt="Love Pets Heart" />
        </div>
    </div>
  )
}

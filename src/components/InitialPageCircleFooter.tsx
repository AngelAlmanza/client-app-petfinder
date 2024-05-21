import { useEffect, useState } from 'react';
import heartSignIn from '../assets/images/heart-sign-in.png';
import { SpecialButton } from './buttons/SpecialButton';

type Props = {
  onSubmit: () => void
  isSubmitting: boolean
}

export const InitialPageCircleFooter = ({ onSubmit, isSubmitting }: Props) => {
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
      className={`bg-white rounded-full flex flex-col items-center pt-10 md:-mx-28 md:pt-16 md:mt-20 lg:mt-4 lg:-ml-80 lg:pt-1  `}
      style={{
        width: screenSize,
        height: screenSize,
      }}>
        <div className="w-100 md:mt-4 lg:mt-8">
          <SpecialButton text="Iniciar Sesión" onClick={onSubmit} isSubmitting={isSubmitting} type="submit" />
        </div>
        <div className="w-44 flex justify-center">
          <img className="w-100 h-fit object-cover mt-4 md:w-20" src={heartSignIn} alt="Love Pets Heart" />
        </div>
    </div>
  )
}

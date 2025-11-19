import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'

type LogoProps = {
  width?: number;
  height?: number;
  color?: string;
};

const Logo: React.FC<LogoProps> = ({ width = 80, height = 40, color="white" }) => {
  return (
    <Link href='/'><Image width={width} height={height} src={color == "white" ? "/images/logo/logo-white.png": "/images/logo/logo.png"} alt="logo" className='transition-all dration-500' /></Link>
  )
}

export default Logo;
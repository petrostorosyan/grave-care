import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className="mr-[30px]"><Image width={80} height={40} src="/images/logo/logo-white.png" alt="logo" /></Link>
  )
}

export default Logo;
'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'

export default function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className='fixed right-4 bottom-4 z-10 cursor-pointer rounded-full bg-gray-800 text-white transition-all hover:scale-125 hover:animate-pulse hover:bg-gray-800'
    >
      <ArrowUp className='h-6 w-6 font-bold' />
    </Button>
  )
}

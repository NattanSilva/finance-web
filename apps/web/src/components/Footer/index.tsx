'use client'

import { ArrowDown, ArrowUp } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [total, setTotal] = useState(1300)
  return (
    <footer className='flex h-12 w-full items-center gap-5 justify-self-end border border-zinc-600 border-t px-4'>
      <p>
        <strong className='font-medium text-green-500'>Total Gain</strong>:
        1500.00
      </p>
      <p>
        <strong className='font-medium text-red-500'>Total Loss</strong>: 200.00
      </p>
      <p className='flex items-center gap-1'>
        Total: {total}
        {total > 0 ? (
          <ArrowUp className='h-6 w-6 animate-bounce font-bold text-green-500' />
        ) : (
          <ArrowDown className='h-6 w-6 animate-bounce font-bold text-red-500' />
        )}
      </p>
    </footer>
  )
}

'use client'

import EmptyListIlustration from '@/assets/empty-list.svg'
import { useFinnanceStore } from '@/stores/finance'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Button } from '../ui/button'

export default function FinanceTable() {
  const finances = useFinnanceStore((state) => state.finnaceList)

  if (finances.length <= 0) {
    return (
      <div className='flex flex-1 items-center justify-center'>
        <Image
          src={EmptyListIlustration}
          alt='Empty list ilustration'
          width={320}
          height={160}
        />
        <h3 className='font-bold text-3xl text-cyan-400 italic'>
          Nothing here yet. <br /> Add some finances to begin! ✨
        </h3>
      </div>
    )
  }

  return (
    <ul className='flex flex-1 flex-col'>
      {finances.map((finance) => (
        <li
          key={finance.id}
          className='flex h-10 min-h-10 w-full divide-x divide-zinc-600 overflow-hidden border-zinc-600 border-b'
        >
          <p className='flex h-full w-2/5 items-center justify-center'>
            <span className='max-w-[95%] truncate'>{finance.action}</span>
          </p>
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden'>
            {finance.value.toFixed(2)}
          </p>
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden'>
            <Button
              className={twMerge(
                'cursor-pointer border-none bg-transparent p-0 font-semibold text-md hover:bg-transparent',
                finance.type === 'gain'
                  ? 'text-green-500 hover:text-green-400'
                  : 'text-red-500 hover:text-red-400'
              )}
            >
              {finance.type}
            </Button>
          </p>
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden'>
            {finance.date.toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  )
}

'use client'

import { useFinnanceStore } from '@/stores/finance'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useEffect } from 'react'

export function Footer() {
  const total = useFinnanceStore((state) => state.total)
  const totalGain = useFinnanceStore((state) => state.totalGain)
  const totalLoss = useFinnanceStore((state) => state.totalLoss)
  const calculateTotal = useFinnanceStore((state) => state.calculateTotal)
  const financeList = useFinnanceStore((state) => state.finnaceList)

  useEffect(() => {
    calculateTotal()
  }, [financeList])

  return (
    <footer className='flex h-12 w-full items-center justify-center gap-10 justify-self-end rounded-b-lg border-zinc-600 border-t px-4'>
      <p className='flex items-center gap-1'>
        <strong className='font-medium text-green-500'>Total Gain</strong>: US${' '}
        {totalGain}
      </p>
      <p className='flex items-center gap-1'>
        <strong className='font-medium text-red-500'>Total Loss</strong>: US${' '}
        {totalLoss}
      </p>
      <p className='flex items-center gap-1'>
        Total: US$ {total}
        {total > 0 ? (
          <ArrowUp className='h-4 w-4 animate-bounce font-bold text-green-500' />
        ) : (
          <ArrowDown className='h-4 w-4 animate-bounce font-bold text-red-500' />
        )}
      </p>
    </footer>
  )
}

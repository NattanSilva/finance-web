import { randomUUID } from 'node:crypto'
import { twMerge } from 'tailwind-merge'
import { Button } from '../ui/button'

type Finance = {
  action: string
  value: number
  type: 'gain' | 'loss'
  date: Date
}

interface FinanceTableProps {
  finances: Finance[]
}

export default function FinanceTable({
  finances,
}: Readonly<FinanceTableProps>) {
  return (
    <ul className='flex w-full flex-col divide-y divide-zinc-600 border-zinc-600 border-b'>
      {finances.map((finance) => (
        <li key={randomUUID()} className='flex h-10 w-full'>
          <p className='flex h-full w-2/5 items-center justify-center border-zinc-600 border-l'>
            <span className='max-w-[95%] truncate'>{finance.action}</span>
          </p>
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden border-zinc-600 border-l'>
            {finance.value.toFixed(2)}
          </p>
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden border-zinc-600 border-l'>
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
          <p className='flex h-full w-1/5 items-center justify-center overflow-hidden border-zinc-600 border-l'>
            {finance.date.toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  )
}

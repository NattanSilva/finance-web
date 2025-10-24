import FinanceList from '@/components/FinanceList'
import { Footer } from '@/components/Footer'
import { Regist } from '@/components/Regist'
import ToTopButton from '@/components/ToTopButton'

export default function Home() {
  return (
    <main className='flex w-full justify-center py-4'>
      <section className='flex w-4/5 flex-col rounded-md border border-zinc-600 bg-gray-900 pt-4'>
        <div className='flex w-full border-zinc-600 border-b px-2 pb-3'>
          <Regist />
          <h3 className='flex-1 text-right font-bold text-gray-300 text-xl shadow'>
            Controle seu{' '}
            <strong className='animate-pulse text-yellow-500 delay-1000 duration-500'>
              dinheiro
            </strong>
            , <br />
            conquiste seus{' '}
            <strong className='animate-pulse text-violet-400 delay-[2s]'>
              sonhos
            </strong>
          </h3>
        </div>
        <div className='flex h-10 w-full divide-x divide-zinc-600 border-zinc-600 border-b'>
          <p className='flex h-full w-2/5 items-center justify-center font-bold'>
            Action
          </p>
          <p className='flex h-full w-1/5 items-center justify-center font-bold'>
            Value(US$)
          </p>
          <p className='flex h-full w-1/5 items-center justify-center font-bold'>
            Type
          </p>
          <p className='flex h-full w-1/5 items-center justify-center font-bold'>
            Date
          </p>
        </div>
        <FinanceList />
        <Footer />
      </section>
      <ToTopButton />
    </main>
  )
}

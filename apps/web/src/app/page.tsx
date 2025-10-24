import FinanceList from '@/components/FinanceList'
import { Footer } from '@/components/Footer'
import { Regist } from '@/components/Regist'

export default function Home() {
  return (
    <main className='flex w-full justify-center py-4'>
      <section className='flex w-4/5 flex-col rounded-md border border-zinc-600 pt-4'>
        <div className='flex w-full gap-3 border-zinc-600 border-b px-2 pb-3'>
          <Regist />
          <h3 className='mr-4 flex-1 text-right font-bold text-gray-300 text-xl shadow'>
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
        <div className='flex h-10 w-full border-zinc-600 border-b'>
          <p className='flex h-full w-2/5 items-center justify-center border-zinc-600 border-l font-bold'>
            Action
          </p>
          <p className='flex h-full w-1/5 items-center justify-center border-zinc-600 border-l font-bold'>
            Value(U$D)
          </p>
          <p className='flex h-full w-1/5 items-center justify-center border-zinc-600 border-l font-bold'>
            Type
          </p>
          <p className='flex h-full w-1/5 items-center justify-center border-zinc-600 border-l font-bold'>
            Date
          </p>
        </div>
        <FinanceList
          finances={[
            {
              value: 256.99,
              type: 'gain',
              action: 'Car',
              date: new Date('2023-08-08'),
            },
            {
              value: 333.99,
              type: 'loss',
              action: 'House',
              date: new Date(),
            },
            {
              value: 560,
              type: 'gain',
              action:
                'Venda de pacotes de pokemon tcg e yugioh, compra de pacotes de pokemon tcg e yugioh',
              date: new Date('2024-07-17'),
            },
          ]}
        />
        <Footer />
      </section>
    </main>
  )
}

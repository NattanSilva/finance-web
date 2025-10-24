import { create } from 'zustand'

export type Finance = {
  id: string
  action: string
  value: number
  type: 'gain' | 'loss'
  date: Date
}

interface FinanceStore {
  finnaceList: Finance[]
  totalGain: string
  totalLoss: string
  total: string
  addFinance: (finance: Finance) => void
  calculateTotal: () => void
}

export const useFinnanceStore = create<FinanceStore>((set, get) => {
  return {
    finnaceList: [
      // {
      //   id: '1',
      //   value: 256.99,
      //   type: 'gain',
      //   action: 'Car',
      //   date: new Date('2023-08-08'),
      // },
      // {
      //   id: '2',
      //   value: 333.99,
      //   type: 'loss',
      //   action: 'House',
      //   date: new Date(),
      // },
      // {
      //   id: '3',
      //   value: 560,
      //   type: 'gain',
      //   action:
      //     'Venda de pacotes de pokemon tcg e yugioh, compra de pacotes de pokemon tcg e yugioh',
      //   date: new Date('2024-07-17'),
      // },
    ],
    totalGain: '0.00',
    totalLoss: '0.00',
    total: '0.00',
    addFinance: (finance) => {
      const { finnaceList } = get()

      set({
        finnaceList: [...finnaceList, finance],
      })
    },
    calculateTotal: () => {
      const { finnaceList } = get()
      let auxGain = 0
      let auxLoss = 0
      let auxTotal = 0

      finnaceList.forEach((finance) => {
        if (finance.type === 'gain') {
          auxGain += finance.value
          auxTotal += finance.value
        }

        if (finance.type === 'loss') {
          auxLoss += finance.value
          auxTotal -= finance.value
        }
      })

      set({
        totalGain: auxGain.toFixed(2),
        totalLoss: auxLoss.toFixed(2),
        total: auxTotal.toFixed(2),
      })
    },
  }
})

'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFinnanceStore } from '@/stores/finance'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import z from 'zod'

const formSchema = z.object({
  value: z.string().min(1, { error: 'Value must be a number' }),
  type: z.enum(['gain', 'loss'], { error: 'Type must be gain or loss' }),
  action: z.string().min(3, { error: 'Action must be a string' }),
})

export type FormData = z.infer<typeof formSchema>

export function Regist() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: '1',
      type: 'gain',
      action: 'Car Wash',
    },
  })
  const addFinance = useFinnanceStore((state) => state.addFinance)
  const finnaceList = useFinnanceStore((state) => state.finnaceList)

  const moneyValue = form.watch('value')
  const typeValue = form.watch('type')

  const handleRegist = (data: FormData) => {
    addFinance({
      id: `${finnaceList.length + 1}`,
      action: data.action,
      type: data.type,
      date: new Date(),
      value: Number.parseFloat(data.value),
    })
    form.setValue('value', '1')
    form.setValue('type', 'gain')
    form.setValue('action', 'Car Wash')
  }

  function typeBorderValidation() {
    if (
      typeValue.length > 0 &&
      ['gain', 'loss'].includes(typeValue.toLowerCase())
    ) {
      return 'border-green-400'
    }

    if (!['gain', 'loss'].includes(typeValue.toLowerCase())) {
      return 'border-red-400'
    }

    if (form.formState.errors.type?.message) {
      return 'border-red-400'
    }

    return ''
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegist)}
        className='flex w-[65%] gap-4'
      >
        <FormField
          control={form.control}
          name='value'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                  className={twMerge(
                    'h-10 rounded-md border border-zinc-400 border-dashed bg-gray-800 px-2 font-medium',
                    moneyValue.length > 0 && Number(moneyValue) > 0
                      ? 'border-green-400'
                      : '',
                    form.formState.errors.value?.message ||
                      Number(moneyValue) < 0
                      ? 'border-red-400'
                      : ''
                  )}
                  placeholder='Money Value'
                />
              </FormControl>
              <FormDescription className='ml-2 text-sm text-zinc-400'>
                Your Money Value{' '}
                <span className='font-medium text-orange-400'>(min 1)</span>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormControl>
                <Input
                  {...field}
                  className={twMerge(
                    'h-10 rounded-md border border-zinc-400 border-dashed bg-gray-800 px-2 font-medium',
                    typeBorderValidation()
                  )}
                  placeholder='Type of Value'
                />
              </FormControl>
              <FormDescription className='ml-2 text-sm text-zinc-400'>
                Just{' '}
                <Button
                  onClick={(e) => form.setValue('type', 'gain')}
                  type='button'
                  className='h-auto cursor-pointer bg-transparent p-0 font-semibold text-green-500 hover:bg-transparent hover:text-green-400'
                >
                  gain
                </Button>{' '}
                or{' '}
                <Button
                  onClick={(e) => form.setValue('type', 'loss')}
                  type='button'
                  className='h-auto cursor-pointer bg-transparent p-0 font-semibold text-red-500 hover:bg-transparent hover:text-red-400'
                >
                  loss
                </Button>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='action'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-1'>
              <FormControl>
                <Input
                  {...field}
                  className={twMerge(
                    'h-10 rounded-md border border-zinc-400 border-dashed bg-gray-800 px-2 font-medium',
                    field.value.length > 0 ? 'border-green-400' : ''
                  )}
                  placeholder='Action of Value'
                />
              </FormControl>
              <FormDescription className='ml-2 text-sm text-zinc-400'>
                Action of value
              </FormDescription>
            </FormItem>
          )}
        />

        <Button
          className='h-10 cursor-pointer rounded-md bg-blue-700 px-6 font-semibold text-lg text-white transition-colors hover:bg-blue-600'
          type='submit'
        >
          Regist
        </Button>
      </form>
    </Form>
  )
}

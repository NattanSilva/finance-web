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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import z from 'zod'

const formSchema = z.object({
  money: z.string().min(1, { error: 'Money must be a number' }),
  type: z
    .string({ error: 'Type must be a string' })
    .min(1, { error: 'Type must be a string' })
    .refine((value) => ['gain', 'loss'].includes(value.toLowerCase()), {
      error: 'Type must be gain or loss',
    }),
})

export type FormData = z.infer<typeof formSchema>

export function Regist() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      money: '',
      type: '',
    },
  })

  const moneyValue = form.watch('money')
  const typeValue = form.watch('type')

  const handleRegist = (data: FormData) => {
    console.log(data)
    form.setValue('money', '')
    form.setValue('type', '')
  }

  function typeBorderValidation() {
    if (
      typeValue.length > 0 &&
      ['gain', 'loss'].includes(typeValue.toLowerCase())
    ) {
      return 'border-green-400'
    }

    if (
      typeValue !== '' &&
      !['gain', 'loss'].includes(typeValue.toLowerCase())
    ) {
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
        className='flex flex-1 gap-4'
      >
        <FormField
          control={form.control}
          name='money'
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
                    form.formState.errors.money?.message ||
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

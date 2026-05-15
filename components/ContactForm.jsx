'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { countries } from '@/config/languages'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(8, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(1, 'Please select a country'),
  address: z.string().min(2, 'Address is required'),
  subject: z.string().optional(),
  message: z.string().min(5, 'Message is required')
})

export default function ContactForm () {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      city: '',
      country: '',
      address: '',
      subject: '',
      message: ''
    }
  })

  const selectedCountry = watch('country', '')

  const onSubmit = async values => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Message sent successfully', {
          description: 'We will contact you shortly.'
        })
        reset()
      } else {
        toast.error('Failed to send message')
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div>
          <Input
            placeholder='Name *'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('name')}
          />

          {errors.name && (
            <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            placeholder='Phone Number *'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('phone')}
          />

          {errors.phone && (
            <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div>
          <Input
            type='email'
            placeholder='E-mail *'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('email')}
          />

          {errors.email && (
            <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            placeholder='City *'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('city')}
          />

          {errors.city && (
            <p className='mt-1 text-sm text-red-500'>{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Row 3 */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div>
          <Select
            value={selectedCountry}
            onValueChange={value => setValue('country', value)}
          >
            <SelectTrigger className='h-13 min-h-13 w-full rounded-none border border-gray-300 bg-background px-3 text-sm shadow-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0'>
              <SelectValue placeholder='Select Country' />
            </SelectTrigger>

            <SelectContent className='max-h-80'>
              {countries.map(country => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.country && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <Input
            placeholder='Address *'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('address')}
          />

          {errors.address && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.address.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 4 */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div>
          <Input
            placeholder='Subject'
            className='h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('subject')}
          />

          {errors.subject && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Textarea
            placeholder='Message'
            className='min-h-13 rounded-none border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-600'
            {...register('message')}
          />

          {errors.message && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {/* Button */}
      <Button
        type='submit'
        disabled={isSubmitting}
        className='mt-3 h-13 rounded-none bg-blue-600 px-8 text-sm font-semibold hover:bg-blue-700'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

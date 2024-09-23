import React from 'react'
import { Link } from 'react-router-dom';
import { Label } from 'flowbite-react'; 
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function signup() {
  return (
    <div className='min-h-screen mt-20 p-4'>
      <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to="/" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2  text-white self-center text-4xl  font-bold dark:text-white'>
              Boxvers
          </Link>
          <p className='mt-5 text-sm font-semibold'>
            THis is a demo project lorem ipsum is the bewst text ever
          </p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
              
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput
                type='text'
                placeholder='example@gmail.com'
                id='email'
              />
              
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput
                type='text'
                placeholder='Password'
                id='password'
              />
              
            </div>
            
          <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' type='submit'>sign up</Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to={'/sign-in' } className='text-blue-500'>Sign In
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}

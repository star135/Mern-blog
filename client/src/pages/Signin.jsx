import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Label, Spinner } from 'flowbite-react'; 
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

export default function signin() {
  const [formData, setformData]= useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();
  const handleChange = (e) => {
    setformData({...formData,[e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields.')
    };

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/user/signin', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false){
        return setErrorMessage(data.message);
      };
      

      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    } catch (error) { 
      setErrorMessage(error.message);
      setLoading(false);

    }


  };

  return (
    <div className='min-h-screen mt-20 p-4'>
      <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to="/" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-2  text-white self-center text-4xl  font-bold dark:text-white'>
              Boxvers
          </Link>
          <p className='mt-5 text-sm font-semibold'>
            You can sign in with email and password.
          </p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your email'/>
              <TextInput
                type='email  '
                placeholder='example@gmail.com'
                id='email' onChange={handleChange}
              />
              
            </div> 
            <div>
              <Label value='Your password'/>
              <TextInput
                type='password'
                placeholder='*********'
                id='password' onChange={handleChange}
              />
              
            </div>
            
          <Button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' type='submit' disabled={loading}>
            {
              loading ? (
                <>
                <Spinner size={'sm'}/>
                <span className='pl-3'>Loading...</span>
                </>
              ) : 'sign in'
            }
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to={'/sign-up' } className='text-blue-500'>Sign up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color={'failure'}>
                {errorMessage}

              </Alert>
            )
          }

        </div>

      </div>
    </div>
  )
}

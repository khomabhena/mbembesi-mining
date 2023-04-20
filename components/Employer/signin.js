import Image from 'next/image'
import React from 'react'

const EmployerSignIn = () => {
  return (
    <div className=' bg-slate-50 w-full md:w-3/4 md:flex rounded-md shadow-md'>
        <div className='flex my-12 flex-col flex-1 gap-12 items-center'>
            <Image className=' h-auto w-36' src="/ukc-logo-color.png" width={400} height={200} alt='logo' />
            <Image className=' h-auto w-3/5 mt-40' src="/svg-signin.svg" width={400} height={200} alt='logo' />
        </div>
        <div className='flex py-12 flex-col flex-1 rounded-md shadow-md bg-gradient-to-tl from-sky-950 to-sky-800'>
            <div className=''>
                <h1 className=' text-center  text-slate-200 font-semibold text-2xl'>Employer Sign In</h1>
                <p className=' text-center text-slate-300 text-base'>Sign in to continue to uk care connection</p>
            </div>

            <form className=' px-8 md:px-12 mt-16'>
                <div className=' flex flex-col gap-8'>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className=' text-slate-300'>Email</label>
                        <input className=' text-slate-100  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="text" placeholder='Enter your email address' />
                    </div>
                    <div className=' flex flex-1 flex-col gap-2'>
                        <label className=' text-slate-300'>Password</label>
                        <input className=' text-slate-600  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="password" placeholder='Enter your password' />
                    </div>
                </div>

                <div className=' flex flex-col gap-2'>
                    <div className='mt-8 flex justify-end'>
                        <button className=' h-min py-2 text-slate-400'>Forgot Password?</button>
                    </div>
                    <div className=' mt-2'>
                        <button className=' bg-sky-600 w-full h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Sign In</button>
                    </div>
                    <div className=' mt-4 flex justify-center'>
                        <button className='h-min py-2 px-8 text-slate-400'>Don&apos;t have an account? Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployerSignIn
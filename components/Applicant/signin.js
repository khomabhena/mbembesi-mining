import { useAuthContext } from '@/context/AuthContext'
import signIn from '@/firebase/signin'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'

const ApplicantSignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        const { result, error } = await signIn(email, password)

        if (error) {
            setError(error.code.includes('user-not-found') 
                ? 'User not Found' 
                : error.code.includes('network') 
                ? 'Network Connection Error'
                : 'Incorrect Email or Password')

            setLoading(false)
            return console.log(error.code)
        } else {
            return router.push("/applicant/profile")
        }

    }

  return (
    <div className=' bg-slate-50 w-full  m-4 md:w-3/4 md:flex rounded-md shadow-md'>
        <div className='flex my-12 flex-col flex-1 gap-12 items-center'>
            <Image className=' h-auto w-36' src="/ukc-logo-color.png" width={400} height={200} alt='logo' />
            <Image className=' h-auto w-3/5 mt-40' src="/svg-signin.svg" width={400} height={200} alt='logo' />
        </div>
        <div className='flex py-12 flex-col flex-1 rounded-md shadow-md bg-gradient-to-tl from-sky-950 to-sky-800'>
            <div className=''>
                <h1 className=' text-center  text-slate-200 font-semibold text-2xl'>Welcome Back!</h1>
                <p className=' text-center text-slate-300 text-base'>Sign in to continue to uk care connection</p>
            </div>

            {/* Error */}
            <div className={`${error === '' ? 'hidden' : 'block'} bg-red-500 text-center py-4 mx-12 rounded-md mt-4 bg-opacity-80 text-slate-200`}>
                {error}
            </div>

            {/* Spinner Loader */}
            <div className={`${loading ? 'flex' : 'hidden'} flex justify-center h-8 mt-4 text-center`}>
                <Oval height={30} width={30} color="#000" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="#ffffff" strokeWidth={2} strokeWidthSecondary={2} />
            </div>

            {/* Form */}
            <form onSubmit={handleForm} className=' px-8 md:px-12 mt-16'>
                <div className=' flex flex-col gap-4'>
                    <div className='flex flex-1 flex-col gap-2'>
                        <label className=' text-slate-300'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} required className=' text-slate-100  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="email" placeholder='Enter your email address' />
                    </div>
                    <div className=' flex flex-1 flex-col gap-2'>
                        <label className=' text-slate-300'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} required className=' text-slate-600  rounded-md px-4 py-2 bg-slate-900 bg-opacity-40' type="password" placeholder='Enter your password' />
                    </div>
                </div>

                <div className=' flex flex-col gap-2'>
                    <div className='mt-8 flex justify-end'>
                        <button className=' h-min py-2 text-slate-400'>Forgot Password?</button>
                    </div>
                    <div className=' mt-2'>
                        <button type='submit' className=' bg-sky-600 text-center cursor-pointer w-full h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Sign In</button>
                    </div>
                    <div className=' mt-4 flex justify-center'>
                        <Link href="/applicant/signup" className='h-min py-2 px-8 text-slate-400'>Don&apos;t have an account? Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ApplicantSignIn
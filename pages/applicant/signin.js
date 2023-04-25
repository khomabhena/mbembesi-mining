import ApplicantSignIn from '@/components/Applicant/signin'
import { AuthContext } from '@/context/AuthContext'
import React from 'react'

const SignIn = () => {
  return (
    <div className=' bg-slate-200 flex min-h-screen justify-center items-center'>
        <ApplicantSignIn />
    </div>
  )
}

export default SignIn
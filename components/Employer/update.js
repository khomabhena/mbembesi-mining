import { useAuthContext } from '@/context/AuthContext'
import getDataFirebase from '@/firebase/getData'
import React, { useEffect, useState, useRef} from 'react'
import Spinner from '../spinner'
import { toastError, toastNormal, toastSuccess } from '../toast'
import uploadFileData from '@/firebase/upload-file-data'
import updateData from '@/firebase/update-data'

const UpdateEmployer = () => {
    const { user } = useAuthContext()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [logo, setLogo] = useState('')
    const [passport, setPassport] = useState('')

    const refCompanyName = useRef('')
    const refCountry = useRef('')
    const refEmployees = useRef('')
    const refIntro = useRef('')
    const refLinkedin = useRef('')
    const refName = useRef('')
    const refPhone = useRef('')
    const refRegistrationNumber = useRef('')
    const refTwitter = useRef('')
    const refWebsite = useRef('')
    const refLogo = useRef('')
    const refPassport = useRef('')

    useEffect(() => {
        const getData = async () => {
            const { result, error } = await getDataFirebase("employers", user.email)
            if (error)
                return

            refCompanyName.current.value = result.companyName
            refCountry.current.value = result.country
            refEmployees.current.value = result.employees
            refIntro.current.value = result.intro
            refLinkedin.current.value = result.linkedin
            refName.current.value = result.name
            refPhone.current.value = result.phone
            refRegistrationNumber.current.value = result.registrationNumber
            refTwitter.current.value = result.twitter
            refWebsite.current.value = result.website
            setLogo(result.logo)
            setPassport(result.passport)

            setData(result)
        }

        getData()
    }, [user.email])

    const handleClick = async (event) => {
        event.preventDefault()
        setLoading(true)

        uploadLogo(refLogo.current.files[0])
    }

    const uploadLogo = async (file) => {
        if (file !== undefined) {
            setLoading(true)
            toastNormal("Uploading logo...")
            const { result, error } = await uploadFileData(user.email, file, "employers", user.email, getNewData(), 'logoUrl', 'logo')

            if (error !== null)
                toastError("Logo upload failed!")
            else 
                toastSuccess("Logo upload successful!")
        }

        uploadPassport(refPassport.current.files[0])
    }

    const uploadPassport = async (file) => {
        if (file !== undefined) {
            setLoading(true)
            toastNormal("Uploading your ID/Passport...")
            const { result, error } = await uploadFileData(user.email, file, "employers", user.email, getNewData(), 'passportUrl', 'passport')

            if (error !== null) 
                toastError("ID/Passport upload failed")
            else 
                toastSuccess("ID/Passport uploaded successfully")
        }

        uploadData()
    }

    const uploadData = async () => {
        setLoading(true)
        toastNormal("Uploading data...")
        const { result, error } = await updateData("employers", user.email, getNewData())

        if (error) 
            toastError("Data upload failed")
        else   
            toastSuccess("Data uploaded successfully")

        setLoading(false)
    }

    const getNewData = () => {
        return {
            companyName: refCompanyName.current.value,
            country: refCountry.current.value,
            employees: refEmployees.current.value,
            intro: refIntro.current.value,
            linkedin: refLinkedin.current.value,
            name: refName.current.value,
            phone: refPhone.current.value,
            registrationNumber: refRegistrationNumber.current.value,
            twitter: refTwitter.current.value,
            website: refWebsite.current.value,
        }
    }

  return (
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Company Name</label>
                    <input ref={refCompanyName} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter your company name' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Owner Name</label>
                    <input ref={refName} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter your name' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Country</label>
                    <input ref={refCountry} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter your country' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Employees</label>
                    <select ref={refEmployees} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='None' selected disabled>Select number of employees</option>
                        <option value='1 to 9'>1 to 9</option>
                        <option value='10 to 29'>10 to 29</option>
                        <option value='30 to 49'>30 to 49</option>
                        <option value='Over 50'>Over 50</option>
                    </select>
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Upload Company Logo</label>
                    <input ref={refLogo} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" placeholder='Enter your first name' accept='image/*' />
                    <label className=' text-slate-400 text-xs'>{logo}</label>
                </div>
            </div>

            {/* Profile */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>About</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>About your company</label>
                    <textarea ref={refIntro} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Write a short paragraph introducing your company' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Registration Number</label>
                    <input ref={refRegistrationNumber} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Enter your company registration number' />
                </div>
            </div>
            
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>National ID/Passport</label>
                    <input ref={refPassport} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" accept='image/*, .pdf, .doc, .docx' />
                    <label className=' text-slate-400 text-xs'>{passport}</label>
                </div>
            </div>


            {/* Social Media */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Social Media</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Twitter</label>
                    <input ref={refTwitter} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Twitter username' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Linkedin</label>
                    <input ref={refLinkedin} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Linkedin username' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Phone</label>
                    <input ref={refPhone} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Phone number' />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Website</label>
                    <input ref={refWebsite} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" placeholder='Website' />
                </div>
            </div>
            <div className=' mt-12 flex justify-end'>
                <div className={`${loading ? 'flex' : 'hidden'} ml-12`}>
                    <Spinner />
                </div> 
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateEmployer

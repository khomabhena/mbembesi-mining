import { useAuthContext } from '@/context/AuthContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import Spinner from '../spinner'
import { toast } from 'react-hot-toast'
import { toastError, toastNormal, toastSuccess } from '../toast'
import uploadFile from '@/firebase/upload-file'
import updateData from '@/firebase/update-data'
import uploadFileData from '@/firebase/upload-file-data'

const UpdateApplicant = () => {
    const router = useRouter()
    const { user } = useAuthContext()
    let [data, setData] = useState(null)
    const [profile, setProfile] = useState('')
    const [loading, setLoading] = useState(false)
    const [cv, setCv] = useState('')
    const [id, setId] = useState('')

    const refFirstName = useRef('')
    const refLastName = useRef('')
    const refType = useRef('')
    const refCountry = useRef('')
    const refProfile = useRef('')
    const refIntro = useRef('')
    const refLanguages = useRef('')
    const refAddress = useRef('')
    const refCV = useRef('')
    const refID = useRef('')
    const refFacebook = useRef('')
    const refTwitter = useRef('')
    const refPhone = useRef('')
    const refWhatsApp = useRef('')
    
    useEffect(() => {
        const getData = async () => {
            const {result, error} = await FirebaseStorage().getData("applicants", user.email)
            if (error)
                return

            refFirstName.current.value = result.firstName
            refLastName.current.value = result.lastName
            refType.current.value = result.profession
            refCountry.current.value = result.country
            refIntro.current.value = result.intro
            refLanguages.current.value = result.languages
            refAddress.current.value = result.address
            refFacebook.current.value = result.facebook
            refTwitter.current.value = result.twitter
            refPhone.current.value = result.phone
            refWhatsApp.current.value = result.whatsApp
            setProfile(result.profile)
            setId(result.passport)
            setCv(result.cv)

            setData(result)
        }

        getData()
    }, [user.email])

    const handleClick = async (event) => {
        event.preventDefault()
        setLoading(true)

        uploadProfile(refProfile.current.files[0])
    }

    const uploadProfile = async (file) => {
        if (file !== undefined) {
            setLoading(true)
            toastNormal("Uploading Profile Picture")
            const { result, error } = await uploadFileData(user.email, file, "applicants", user.email, getNewData(), 'profileUrl', 'profile')
            
            if (error !== null) {
                toastError("Profile upload failed!")
            } else {
                toastSuccess("Profile picture uploaded")
            }
        }
        uploadCv(refCV.current.files[0])
    }

    const uploadCv = async (file) => {
        if (file !== undefined) {
            setLoading(true)
            toastNormal("Uploading your CV")
            const { result, error } = await uploadFileData(user.email, file, "applicants", user.email, getNewData(), 'cvUrl', 'cv')
            
            if (error !== null) {
                toastError("CV upload failed!")
            } else {
                toastSuccess("CV uploaded")
            }
        }
        uploadId(refID.current.files[0])
    }

    const uploadId = async (file) => {
        if (file !== undefined) {
            setLoading(true)
            toastNormal("Uploading your ID/Passport")
            const { result, error } = await uploadFileData(user.email, file, "applicants", user.email, getNewData(), 'passportUrl', 'passport')
            
            if (error !== null) {
                toastError("ID/Passport upload failed")
            } else {
                toastSuccess("ID/Passport uploaded")
            }
        }
        uploadData()
    }

    const uploadData = async () => {
        setLoading(true)
        toastNormal("Uploading your data")
        const { result, error } = await updateData("applicants", user.email, getNewData())

        if (error) {
            toastError("Data upload failed")
        } else {
            toastSuccess("Data uploaded")
        }
        setLoading(false)
    }

    const getNewData = () => {
        return { 
                firstName: refFirstName.current.value,
                lastName: refLastName.current.value,
                type: refType.current.value,
                country: refCountry.current.value,
                
                intro: refIntro.current.value,
                languages: refLanguages.current.value.split(','),
                address: refAddress.current.value,
                
                facebook: refFacebook.current.value,
                twitter: refTwitter.current.value,
                phone: refPhone.current.value,
                whatsApp: refWhatsApp.current.value,
               
            }
    }

  return (
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>First Name</label>
                    <input ref={refFirstName} placeholder={'Enter your first name'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Last Name</label>
                    <input ref={refLastName} placeholder={'Enter your first name'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Type</label>
                    <select ref={refType} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='None' selected disabled>Select job type</option>
                        <option value='Nurse'>Nurse</option>
                        <option value='Nurse Aid'>Nurse Aid</option>
                        <option value='Adult Care'>Adult Care</option>
                        <option value='Hospice Care'>Hospice Care</option>
                    </select>
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Country</label>
                    <input ref={refCountry} placeholder={'Enter your country'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Upload Profile Picture</label>
                    <input ref={refProfile} name='Kholwani' className=' file:bg-sky-600 file:border-0 file:rounded-md file:text-slate-200 font-semibold file:px-4 file:py-2 ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" placeholder='Enter your first name' accept='image/*' />
                    <label className=' text-slate-400 text-xs'>{profile}</label>
                </div>
            </div>

            {/* Profile */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Profile</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Introduce yourself</label>
                    <textarea ref={refIntro} placeholder={'Introduce yourself'} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Languages</label>
                    <input ref={refLanguages} placeholder={'Separate your languages by commas!'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Physical Address</label>
                    <input ref={refAddress} placeholder={'Enter your address'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Upload your CV</label>
                    <input ref={refCV} className='file:bg-sky-600 file:border-0 file:rounded-md file:text-slate-200 font-semibold file:px-4 file:py-2 ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" accept='.pdf, .doc, .docx, .txt' />
                    <label className=' text-slate-400 text-xs'>{cv}</label>
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>National ID/Passport</label>
                    <input ref={refID} className='file:bg-sky-600 file:border-0 file:rounded-md file:text-slate-200 font-semibold file:px-4 file:py-2 ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" accept='image/*, .pdf, .doc, .docx' />
                    <label className=' text-slate-400 text-xs'>{id}</label>
                </div>
            </div>

            {/* Social Media */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Social Media</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Facebook</label>
                    <input ref={refFacebook} placeholder={'Facebook username'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Twitter</label>
                    <input ref={refTwitter} placeholder={'Twitter username'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Phone</label>
                    <input ref={refPhone} placeholder={'Enter your phone number, include country code'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>WhatsApp</label>
                    <input ref={refWhatsApp} placeholder={'WhatsApp number'} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' mt-12 flex justify-end gap-12'>
                <div className={`${loading ? 'flex' : 'hidden'} ml-12`}>
                    <Spinner />
                </div>              
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateApplicant
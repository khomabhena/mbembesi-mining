import { useAuthContext } from '@/context/AuthContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import React, { useState, useEffect } from 'react'

const UpdateApplicant = () => {
    const { user } = useAuthContext()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('')
    const [country, setCountry] = useState('')
    const [intro, setIntro] = useState('')
    const [address, setAddress] = useState('')
    const [languages, setLanguages] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitter, setTwitter] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const getData = async () => {
            const {result, error} = await FirebaseStorage().getData("applicants", user.email)
            setFirstName(result.firstName)
            setLastName(result.lastName)
            setCountry(result.country)
            setIntro(result.intro)
            setAddress(result.address)
            setLanguages(result.languages)
            setFacebook(result.facebook)
            setTwitter(result.twitter)
            setWhatsApp(result.whatsApp)
            setPhone(result.phone)
        }

        getData()
    })

    const handleClick = (event) => {
        event.preventDefault()
    }


  return (
    <div className=' bg-slate-50 shadow-sm rounded-md px-8 py-8'>
        <form onSubmit={handleClick}>
            <div className=' flex flex-col md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>First Name</label>
                    <input placeholder={firstName || 'Enter your first name'} onChange={(e) => setFirstName(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Last Name</label>
                    <input placeholder={lastName || 'Enter your first name'} onChange={(e) => setLastName(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Job Type</label>
                    <select onChange={(e) => setType(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent'>
                        <option value='None'>Select job type</option>
                        <option value='Nurse'>Nurse</option>
                        <option value='Nurse Aid'>Nurse Aid</option>
                        <option value='Adult Care'>Adult Care</option>
                        <option value='Hospice Care'>Hospice Care</option>
                    </select>
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Country</label>
                    <input placeholder={country || 'Enter your country'} onChange={(e) => setCountry(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Upload Profile Picture</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" placeholder='Enter your first name' accept='image/*' />
                </div>
            </div>

            {/* Profile */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Profile</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Introduce yourself</label>
                    <textarea placeholder={intro || 'Introduce yourself'} onChange={(e) => setIntro(e.target.value)} rows={6} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Languages</label>
                    <input placeholder={languages || 'Separate your languages by commas!'} onChange={(e) => setLanguages(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Physical Address</label>
                    <input placeholder={address || 'Enter your address'} onChange={(e) => setAddress(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Upload your CV</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" accept='.pdf, .doc, .docx, .txt' />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>National ID/Passport</label>
                    <input className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="file" accept='image/*, .pdf, .doc, .docx' />
                </div>
            </div>


            {/* Social Media */}
            <div className='self-start mt-12 font-medium text-lg
            text-slate-500'>Social Media</div>
            <div className=' flex flex-col mt-4 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Facebook</label>
                    <input placeholder={facebook || 'Facebook username'} onChange={(e) => setFacebook(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Twitter</label>
                    <input placeholder={twitter || 'Twitter username'} onChange={(e) => setTwitter(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' flex flex-col mt-8 md:flex-row gap-8'>
                <div className='flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>Phone</label>
                    <input placeholder={phone || 'Enter your phone number, include country code'} onChange={(e) => setPhone(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
                <div className=' flex flex-1 flex-col gap-2'>
                    <label className=' text-slate-500'>WhatsApp</label>
                    <input placeholder={whatsApp || 'WhatsApp number'} onChange={(e) => setWhatsApp(e.target.value)} className=' ring-1 text-slate-600 ring-slate-300 rounded-sm px-4 py-2 bg-transparent' type="text" />
                </div>
            </div>
            <div className=' mt-12 flex justify-end'>                
                <button type='submit' className=' bg-sky-600 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateApplicant
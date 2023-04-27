import ApplicationCard from '@/components/Applicant/application-card'
import JobCard from '@/components/Applicant/job-card'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import React, { useEffect, useState } from 'react'

const Applications = () => {
  const { user } = useAuthContext()
  const { setActiveLink } = useStateContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    setActiveLink("/applicant/applications")
    const getData = async () => {
      let { result, error } = await FirebaseStorage().getData('applications-applicants', user.email)
    
      if (error) {
        return console.log(error)
      }

      if (result.applications !== undefined) {
        setData(result.applications)
      }
    }

    getData()
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      {
        data?.map((item, index) => (
          <ApplicationCard
            data={item} 
            key={index} />
        ))
      }
    </div>
  )
}

Applications.getLayout = (page) => (
  <ApplicantDashboard>
      {page}
    </ApplicantDashboard>
)

export default Applications
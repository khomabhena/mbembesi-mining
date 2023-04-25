import JobCard from '@/components/Applicant/job-card'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import { useAuthContext } from '@/context/AuthContext'
import { StateContext } from '@/context/StateContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import React, { useEffect, useState } from 'react'

const Jobs = () => {
  const {user} = useAuthContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      let jobsArray = []
      let { result, error } = await FirebaseStorage().getAllData('jobs')

      if (error) {
        return console.log(error)
      }

      result.forEach(item => {
        let newObj = {}
        item.data.jobs.forEach(obj => {
          newObj = {...obj, id: item.id}
          jobsArray.push(newObj)
        })
      })

      setData(jobsArray)
    }

    getData()
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      {
        data?.map((item, index) => (
          <JobCard
            data={item}
            key={index} />
        ))
      }
    </div>
  )
}

Jobs.getLayout = function getLayout(page) {
  return (
      <ApplicantDashboard>
        {page}
      </ApplicantDashboard>
  )
}

export default Jobs
import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import JobCardEmployer from '@/components/Employer/job-card'
import NoDataFound from '@/components/no-data-found'
import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import getDataFirebase from '@/firebase/getData'
import React, { useEffect, useState } from 'react'

const Jobs = () => {
  const { user } = useAuthContext()
  const { setActiveLink } = useStateContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    setActiveLink("/employer/jobs")
    const getData = async () => {
      const { result, error } = await getDataFirebase('jobs', user.email)

      if (error)
        return

      setData(result.jobs)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      {
        data?.map((item, index) => (
          <JobCardEmployer key={index} data={item} />
        )) || <NoDataFound message='No Jobs Found' />
      }
    </div>
  )
}

Jobs.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default Jobs
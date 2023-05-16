import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import ApplicationsCard from '@/components/Employer/applications'
import NoDataFound from '@/components/no-data-found'
import { useAuthContext } from '@/context/AuthContext'
import { useStateContext } from '@/context/StateContext'
import getDataFirebase from '@/firebase/getData'
import React, {useEffect, useState} from 'react'

const Applications = () => {
  const { user } = useAuthContext()
  const { setActiveLink } = useStateContext()
  const [data, setData] = useState(null)

  useEffect(() => {
    setActiveLink("/employer/applications")
    const getData = async () => {
      const { result, error } = await getDataFirebase('applications-employer', user.email)
      if (error)
        return

      let array = result.applications
      setData(array)
    }
    
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 pb-12'>
      {
        data ? <ApplicationsCard data={data} /> : <NoDataFound message='No Applications Found' />
      }
      {/* {(<ApplicationsCard data={data} /> && data !== null) || <NoDataFound message='No Applications Found' />} */}
    </div>
  )
}

Applications.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)
export default Applications
import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import ApplicationsCard from '@/components/Employer/applications'
import { useStateContext } from '@/context/StateContext'
import React, {useEffect} from 'react'

const Applications = () => {
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/employer/applications")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 pb-12'>
      <ApplicationsCard />
    </div>
  )
}

Applications.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)
export default Applications
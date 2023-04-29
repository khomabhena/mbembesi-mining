import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import UpdateEmployer from '@/components/Employer/update'
import { useStateContext } from '@/context/StateContext'
import React, {useEffect} from 'react'

const Update = () => {
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/employer/update")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <UpdateEmployer />
    </div>
  )
}

Update.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default Update
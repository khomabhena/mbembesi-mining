import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import PostJobEmployer from '@/components/Employer/post-job'
import { useStateContext } from '@/context/StateContext'
import React, {useEffect} from 'react'

const PostJob = () => {
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/employer/post-job")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='flex flex-col gap-4 mx-4 md:mx-8 mt-8 pb-12'>
      <PostJobEmployer />
    </div>
  )
}

PostJob.getLayout = (page) => (
  <EmployerDashboard>
    {page}
  </EmployerDashboard>
)

export default PostJob
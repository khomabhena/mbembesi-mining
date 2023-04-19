import EmployerDashboard from '@/components/Dashboard/employer-dashboard'
import PostJobEmployer from '@/components/Employer/post-job'
import React from 'react'

const PostJob = () => {
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
import React from 'react'

const NoDataFound = ({ message }) => {
  return (
    <div className='flex font-bold text-6xl text-slate-300 justify-center mt-28'>
        {message}
    </div>
  )
}

export default NoDataFound
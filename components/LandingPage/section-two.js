import React from 'react'
import Card from './card'

const SectionTwo = ({title, data}) => {
  return (
    <div className=' flex flex-col items-center py-24 min-h-screen'>
        <h1 className=' text-4xl font-semibold text-slate-600'>{title}</h1>
        <div className=' flex flex-col md:flex-row mt-12 px-24 gap-8'>
            {
                data?.map((item, index) => (
                    <Card key={index} data={item} />
                ))
            }
        </div>
    </div>
  )
}

export default SectionTwo
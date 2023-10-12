import React from 'react'
import Card from './card'
import CardManagement from './card-management'

const SectionManagement= ({id, card, title, data}) => {
  return (
    <div id={id} className=' flex flex-col items-center py-24 min-h-screen'>
        <h1 className=' text-4xl font-semibold text-emerald-600'>{title}</h1>
        <div className=' grid grid-cols-1 md:grid-cols-3 mt-12 px-24 gap-8'>
            {
                data?.map((item, index) => (
                    card == 1 ? <Card key={index} data={item} /> : <CardManagement key={index} data={item} />
                ))
            }
        </div>
    </div>
  )
}

export default SectionManagement
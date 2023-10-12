import React from 'react'
import Card from './card'
import CardManagement from './card-management'

const SectionTwo = ({id, card, title, data}) => {
  return (
    <div id={id} className=' flex flex-col items-center py-24 min-h-screen'>
        <h1 className=' text-4xl font-semibold text-emerald-600'>{title}</h1>
        <div className=' flex flex-col md:flex-row flex-wrap mt-12 px-24 gap-8'>
            {
                data?.map((item, index) => (
                    card == 1 ? <Card key={index} data={item} /> : <CardManagement key={index} data={item} />
                ))
            }
        </div>
    </div>
  )
}

export default SectionTwo
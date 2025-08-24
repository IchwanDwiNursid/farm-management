import TambahFormVaksin from '@/components/vaksin/FormVaksin'
import React from 'react'

const TambahVaksin = () => {
  return (
    <div className='row justify-content-center mx-2'>
        <div className="col-md-4 mt-5 p-4 border border-primary rounded-3">
            <TambahFormVaksin/>
        </div>
    </div>
  )
}

export default TambahVaksin
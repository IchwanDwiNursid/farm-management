import TambahFormPanen from '@/components/panen/TambahForm'
import React from 'react'

const TambahPanenPage = () => {
  return (
    <div className='row justify-content-center mx-2'>
        <div className="col-md-4 mt-5 p-4 border border-primary rounded-3">
            <TambahFormPanen/>
        </div>
    </div>
  )
}

export default TambahPanenPage
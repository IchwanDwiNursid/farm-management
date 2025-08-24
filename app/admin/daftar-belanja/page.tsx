import Link from 'next/link'
import React from 'react'

const DaftarBelanjaPage = () => {
  return (
    <div className="row p-3 gap-2 justify-content-center">
      <div className="d-flex justify-content-between mx-5">
        <h3>Daftar Balanja</h3>
        <Link href="/admin/daftar-belanja/tambah" className='btn btn-primary'>Tambah</Link>
      </div>
      <div className='col-12'>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">21-12-2002</h5>
          </div>
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">VOER</li>
            <li className="list-group-item">Vitachick</li>
            <li className="list-group-item">Vita Strees</li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <Link href="#" className="card-link btn btn-primary">
              Edit
            </Link>
            <Link href="#" className="card-link btn btn-success">
              Download
            </Link>
            <Link href="#" className="card-link btn btn-danger">
              Hapus
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaftarBelanjaPage
import { getAllVaksin } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const Vaksin = async () => {
  const vaksins = await getAllVaksin();
  if (!vaksins || vaksins.length === 0) {
    redirect('/vaksin/tambah');
  }
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 text-end mb-3 px-5 d-flex justify-content-between">
            <h3>List Vaksin</h3>
            <Link href="vaksin/tambah" className="btn btn-primary" style={{ width: 80 }}>
                Tambah
            </Link>
        </div>
      <div className="col-12 w-xl-50 px-4 mx-auto table-responsive">
        <table className="table table-striped table-bordered border-primary">
          <thead className='table-primary border-primary'>
            <tr>
              <th scope="col" className="text-center">Gambar</th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Indikasi</th>
              <th scope="col" className="text-center">Type</th>
              <th scope="col" className="text-center">Penggunaan</th>
              <th scope="col" className="text-center">Umur</th>
            </tr>
          </thead>
          <tbody>
            {vaksins.map((vaksin) => (
              <tr key={vaksin.id}>
                <td className="align-middle text-center">
                  <img src={vaksin.gambar} alt="vaksin_image"
                  width={80}
                  height={80}
                  />
                </td>
                <td className="align-middle text-center">{vaksin.nama}</td>
                <td className="align-middle text-center">{vaksin.indikasi}</td>
                <td className="align-middle text-center">{vaksin.tipe}</td>
                <td className="align-middle text-center">{vaksin.penggunaan}</td>
                <td className="align-middle text-center">{vaksin.umur} Minggu</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Vaksin
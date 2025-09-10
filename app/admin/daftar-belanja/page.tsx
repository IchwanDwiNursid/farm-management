import {getAllBelanja, getAllBelanjaBesedOnMonth, getAllPanen} from '@/service/query'
import Link from 'next/link'
import React from 'react'

const DaftarBelanjaPage = async() => {

  const outcome = Number(await getAllBelanjaBesedOnMonth())
  console.log(outcome)
  const belanjaan = await getAllBelanja()
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 mb-3 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <table className="table table-borderless w-25 mb-0">
            <tbody className="text-start">
              <tr>
                <td className="fw-bold">Bulan :</td>
                <td>{new Date().toLocaleString("id-ID", { month: "long" })}</td>
              </tr>
              <tr>
                <td className="fw-bold">Outcome :</td>
                <td>{outcome?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                })}</td>
              </tr>
            </tbody>
          </table>

          <Link
            href="/admin/daftar-belanja/tambah"
            className="btn btn-primary ms-3"
            style={{ minWidth: 100 }}
          >
            Tambah
          </Link>
        </div>
      </div>

      <div className="col-12 px-4 mx-auto table-responsive">
        <table className="table table-striped table-bordered border-primary">
          <thead className='table-primary border-primary'>
            <tr>
              <th scope="col" className="text-center">No</th>
              <th scope="col" className="text-center">Id</th>
              <th scope="col" className="text-center">Nama</th>
              <th scope="col" className="text-center">Jumlah</th>
              <th scope="col" className="text-center">Harga</th>
              <th scope="col" className="text-center">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {belanjaan.map((belanja, index) => (
              <tr key={belanja.id}>
                <td className="align-middle text-center">{index + 1}</td>
                <td className="align-middle text-center">{belanja.id}</td>
                <td className="align-middle text-center">{belanja.nama}</td>
                <td className="align-middle text-center">{belanja.jumlah}</td>
                <td className="align-middle text-center">{belanja.harga?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                })}</td>
                <td className="align-middle text-center">
                  {new Date(belanja.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DaftarBelanjaPage
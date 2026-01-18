import {getAllBelanja, getTotalBelanjaPerBulan} from '@/service/query'
import Link from 'next/link'
import React from 'react'

const DaftarBelanjaPage = async() => {
  const belanjaan = await getAllBelanja()
  const totalBelanjaPerBulan = await getTotalBelanjaPerBulan() as any
  console.info(totalBelanjaPerBulan)
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 mb-3 px-5 text-end">
          <Link
            href="/admin/daftar-belanja/tambah"
            className="btn btn-primary ms-3"
            style={{ minWidth: 100 }}
          >
            Tambah
          </Link>
      </div>

      <div className='table-responsive d-flex mx-auto'>
        <div className="col-10 px-4">
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
        <div className="col-2 px-4">
            <table className='table table-striped-columns'>
              <thead className='table-warning'>
                <tr>
                  <th>Bulan</th>
                  <th>Pengeluaran</th>
                </tr>
              </thead>
              <tbody>
                {totalBelanjaPerBulan.map((item: any, index: number) => (
                  <tr key={index + 1}>
                    <th>{item.bulan}</th>
                    <th>
                      {Number(item.total_harga).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR"
                      })}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default DaftarBelanjaPage
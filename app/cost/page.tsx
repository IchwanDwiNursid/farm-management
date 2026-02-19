import { getIncome, PrintSqlToPdf } from '@/service/action';
import {getAllCost, getAllPanen, getTotalPanenPerBulan } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const CostPage = async() => {
  const costs = await getAllCost()
  if (costs?.length === 0) {
    redirect('/cost/tambah')
  }
  const totalPanenPerBulan = await getTotalPanenPerBulan() as []

  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 mb-3 px-5 text-end">
          <Link
            href="/cost/tambah"
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
                <th scope="col" className="text-center">Harga</th>
                <th scope="col" className="text-center">Tanggal</th>
                <th scope="col" className="text-center">Keterangan</th>
                
              </tr>
            </thead>
            <tbody>
                {costs?.map((cost, index) => (
                    <tr key={cost.id}>
                        <td className="align-middle text-center">{index + 1}</td>
                        <td className="align-middle text-center">{cost.harga.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR"
                        })}</td>
                        <td className="align-middle text-center">
                            {new Date(cost.createdAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                            })}
                        </td>
                        <td className="align-middle text-center">{cost.keterangan}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <div className="col-2 px-4">
            <table className='table table-striped-columns'>
              <thead className='table-warning'>
                <tr>
                  <th>Bulan</th>
                  <th>Telur</th>
                  <th>Daging</th>
                  <th>Pendapatan</th>
                </tr>
              </thead>
              <tbody>
                {totalPanenPerBulan?.map((item: any, index: number) => (
                  <tr key={index + 1}>
                    <th>{item.bulan}</th>
                    <th>{item.jumlah_telur}</th>
                    <th>{item.jumlah_daging}</th>
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
        </div> */}
      </div>
    </div>
  )
}

export default CostPage
import { getIncome } from '@/service/action';
import {getAllPanen, getAllPanenBesedOnMonth } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const PanenPage = async() => {
  const panens = await getAllPanen()
  if (panens.length === 0) {
    redirect('/panen/tambah')
  }
  const monthPanen = await getAllPanenBesedOnMonth()
  const telur = monthPanen?.find(item => item.jenis === "telur")?.total || 0;
  const daging = monthPanen?.find(item => item.jenis === "daging")?.total || 0;
  const income = await getIncome()
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
                <td className="fw-bold">Telur :</td>
                <td>{telur.toString()}</td>
              </tr>
              <tr>
                <td className="fw-bold">Daging :</td>
                <td>{daging.toString()}</td>
              </tr>
              <tr>
                <td className="fw-bold">Income :</td>
                <td>{income?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                })}</td>
              </tr>
            </tbody>
          </table>

          <Link
            href="/panen/tambah"
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
              <th scope="col" className="text-center">Jenis</th>
              <th scope="col" className="text-center">Tindakan</th>
              <th scope="col" className="text-center">Jumlah</th>
              <th scope="col" className="text-center">Harga</th>
              <th scope="col" className="text-center">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {panens.map((panen, index) => (
              <tr key={panen.id}>
                <td className="align-middle text-center">{index + 1}</td>
                <td className="align-middle text-center">{panen.id}</td>
                <td className="align-middle text-center">{panen.jenis}</td>
                <td className="align-middle text-center">{panen.tindakan}</td>
                <td className="align-middle text-center">{panen.jumlah}</td>
                <td className="align-middle text-center">{panen.harga?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR"
                })}</td>
                <td className="align-middle text-center">
                  {new Date(panen.createdAt).toLocaleDateString("id-ID", {
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

export default PanenPage
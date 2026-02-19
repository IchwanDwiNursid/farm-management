import { getIncome, PrintSqlToPdf } from '@/service/action';
import {getAllPanen, getTotalPanenPerBulan } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const PanenPage = async() => {
  const panens = await getAllPanen()
  if (panens.length === 0) {
    redirect('/panen/tambah')
  }
  const totalPanenPerBulan = await getTotalPanenPerBulan() as []

  async function handleDownloadPdf() {
      "use server";
      await PrintSqlToPdf();
  }

  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 mb-3 px-5 d-flex justify-content-end gap-2 mb-4">
            <Link
              href="/panen/tambah"
              className="btn btn-primary ms-auto"
              style={{ minWidth: 100 }}
            >
              Tambah
            </Link>
            <div>
              <form action="/api/download-panen">
                <button type="submit" className='btn btn-danger'>Download <span className='bi bi-file-earmark-pdf'></span> </button>
              </form>
            </div>
      </div>
      <div className='table-responsive d-flex mx-auto'>
        <div className="col-10 px-4">
          <table className="table table-striped table-bordered border-primary">
            <thead className='table-primary border-primary'>
              <tr>
                <th scope="col" className="text-center">No</th>
                <th scope="col" className="text-center">Jenis</th>
                <th scope="col" className="text-center">Tindakan</th>
                <th scope="col" className="text-center">Jumlah</th>
                <th scope="col" className="text-center">Harga</th>
                <th scope="col" className="text-center">Tanggal</th>
                <th scope="col" className="text-center">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {panens.map((panen, index) => (
                <tr key={panen.id}>
                  <td className="align-middle text-center">{index + 1}</td>
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
                  <td className="align-middle text-center">{panen.keterangan}</td>
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
        </div>
      </div>
    </div>
  )
}

export default PanenPage
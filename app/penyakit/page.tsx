import TablePenyakit from '@/components/penyakit/TablePenyakit';
import {getAllPenyakit} from '@/service/query'
import Link from 'next/link'
import React from 'react'

const PenyakitPage = async () => {
  const penyakit = await getAllPenyakit();
  if (!penyakit || penyakit.length === 0) {
    return (
        <div className="row" style={{ marginTop: 50 }}>
            <div className="col-12 text-end mb-3 px-5">
                <Link href="/penyakit/tambah" className="btn btn-primary" style={{ width: 80 }}>
                    Tambah
                </Link>
            </div>
        <div className="col-12 w-xl-50 px-4 mx-auto table-responsive">
            <table className="table table-striped table-bordered border-primary">
            <thead className='table-primary border-primary'>
                <tr>
                  <th scope="col" className="text-center">Gambar Penyakit</th>
                  <th scope="col" className="text-center">Gambar Ayam</th>
                  <th scope="col" className="text-center">Nama Penyakit</th>
                  <th scope="col" className="text-center">Nama Ayam</th>
                  <th scope="col" className="text-center">Gejala</th>
                  <th scope="col" className="text-center">Deskripsi</th>
                  <th scope="col" className="text-center">Pengobatan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={8} className="text-center">Tidak ada data vaksinasi</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
  }
  return (
      <TablePenyakit penyakit={penyakit}/>
  )
}

export default PenyakitPage
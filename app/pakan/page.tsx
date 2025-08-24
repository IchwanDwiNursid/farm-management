import TablePakan from '@/components/pakan/TablePakan';
import {getAllPakan } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const PakanPage = async() => {
  const pakans = await getAllPakan();
  if (!pakans || pakans.length === 0) {
    redirect('/obat/tambah');
  }
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 text-end mb-3 px-5 d-flex justify-content-between">
            <h3>List Pakan</h3>
            <Link href="/pakan/tambah" className="btn btn-primary" style={{ width: 80 }}>
                Tambah
            </Link>
      </div>
      <div className="col-12 px-4 mx-auto table-responsive">
        <TablePakan pakans={pakans}/>
      </div>
    </div>
  )
}

export default PakanPage
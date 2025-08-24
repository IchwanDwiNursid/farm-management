import TableObat from '@/components/obat/TableObat';
import { getAllObat } from '@/service/query'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const Obat = async() => {
  const obats = await getAllObat();
  if (!obats || obats.length === 0) {
    redirect('/obat/tambah');
  }
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 d-flex mb-3 px-5 justify-content-between">
            <h3>List Obat</h3>
            <Link href="/obat/tambah" className="btn btn-primary" style={{ width: 80 }}>
                Tambah
            </Link>
      </div>
      <div className="col-12 px-4 mx-auto table-responsive">
        {/* ObatTable */}
        <TableObat obats={obats}/>
      </div>
    </div>
  )
}

export default Obat
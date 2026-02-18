import Pulse from '@/components/Pulse'
import { deleteJadwalObat, deleteJadwalVaksinasi, updateJadwalObat, updateJadwalVaksinasi } from '@/service/action'
import { getAllJadwalObat, getAllJadwalVaksinasi} from '@/service/query'
import Link from 'next/link'
import React from 'react'

const JadwalVaksin = async () => {
    const vaksinasi = await getAllJadwalVaksinasi()
    const medicane = await getAllJadwalObat()
    const isTodayOrAfter = (dateString: any) => {
      const d = new Date(dateString)
      const today = new Date()

      d.setHours(0, 0, 0, 0)
      today.setHours(0, 0, 0, 0)
    
      return d <= today
    }
    
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-6 w-xl-50 px-4 table-responsive">
        <Link href="/jadwal-vaksin/tambah" className="btn btn-success text-end fw-bold text-light mb-3" style={{ width: 80 }}>
            Vaksin
        </Link>
        <table className="table table-striped table-bordered border-primary">
          <thead className='table-primary border-primary'>
            <tr>
              <th scope="col" className="text-center">Gambar Ayam</th>
              <th scope="col" className="text-center">Gambar Vaksin</th>
              <th scope="col" className="text-center">Nama Ayam</th>
              <th scope="col" className="text-center">Nama Vaksin</th>
              <th scope="col" className="text-center">Dosis</th>
              <th scope="col" className="text-center">Tanggal</th>
              <th scope="col" className="text-center">Keterangan</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {vaksinasi.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  <h5 className="mb-0 text-muted">Tidak ada jadwal Vaksin</h5>
                </td>
              </tr>
            ):(
              vaksinasi.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle text-center">
                    <img src={item.ayam.gambar} alt="ayam_image"
                    width={80}
                    height={80}
                    />
                  </td>
                  <td className="align-middle text-center">
                    <img src={item.vaksin.gambar} alt="ayam_image"
                    width={80}
                    height={80}
                    />
                  </td>
                  <td className="align-middle text-center">{item.ayam.nama}</td>
                  <td className="align-middle text-center">{item.vaksin.nama}</td>
                  <td className="align-middle text-center">{item.dosis}</td>
                  <td className="align-middle text-center">
                    {isTodayOrAfter(item.tanggal) && <Pulse/>}
                    {new Date(item.tanggal).toLocaleDateString("id-ID")}
                  </td>
                  <td className="align-middle text-center">{item.keterangan}</td>
                  {item.sudah ? (
                      <td className="align-middle text-center">
                          <form action={async () => {
                              "use server"
                              await deleteJadwalVaksinasi(item.id);
                              }}>
                              <button type="submit" className="btn btn-sm btn-danger me-2">Hapus</button>
                          </form>
                      </td>
                  ): (
                      <td className="align-middle text-center">
                          <form action={async () => {
                              "use server"
                              await updateJadwalVaksinasi(item.id);
                              }}>
                              <button type="submit" className="btn btn-sm btn-success me-2">Sudah</button>
                          </form>
                      </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* schedule obat */}
      <div className="col-6 w-xl-50 px-4 table-responsive">
        <Link href="/jadwal-obat/tambah" className="btn btn-success fw-bold text-light mb-3" style={{ width: 80 }}>
            Obat
        </Link>
        <table className="table table-striped table-bordered border-primary">
          <thead className='table-primary border-primary'>
            <tr>
              <th scope="col" className="text-center">Gambar Ayam</th>
              <th scope="col" className="text-center">Gambar Obat</th>
              <th scope="col" className="text-center">Nama Ayam</th>
              <th scope="col" className="text-center">Nama Obat</th>
              <th scope="col" className="text-center">Dosis</th>
              <th scope="col" className="text-center">Tanggal</th>
              <th scope="col" className="text-center">Keterangan</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicane.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  <h5 className="mb-0 text-muted">Tidak ada jadwal obat</h5>
                </td>
              </tr>
            ): (
              medicane.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle text-center">
                    <img src={item.ayam.gambar} alt="ayam_image"
                    width={80}
                    height={80}
                    />
                  </td>
                  <td className="align-middle text-center">
                    <img src={item.obat.gambar} alt="ayam_image"
                    width={80}
                    height={80}
                    />
                  </td>
                  <td className="align-middle text-center">{item.ayam.nama}</td>
                  <td className="align-middle text-center">{item.obat.nama}</td>
                  <td className="align-middle text-center">{item.dosis}</td>
                  <td className="align-middle text-center">
                    {isTodayOrAfter(item.tanggal) && <Pulse/>}
                    {new Date(item.tanggal).toLocaleDateString("id-ID")}
                  </td>
                  <td className="align-middle text-center">{item.keterangan}</td>
                  {item.sudah ? (
                      <td className="align-middle text-center">
                          <form action={async () => {
                              "use server"
                              await deleteJadwalObat(item.id);
                              }}>
                              <button type="submit" className="btn btn-sm btn-danger me-2">Hapus</button>
                          </form>
                      </td>
                  ): (
                      <td className="align-middle text-center">
                          <form action={async () => {
                              "use server"
                              await updateJadwalObat(item.id);
                              }}>
                              <button type="submit" className="btn btn-sm btn-success me-2">Sudah</button>
                          </form>
                      </td>
                  )}
                </tr>
              ))
            )} 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JadwalVaksin
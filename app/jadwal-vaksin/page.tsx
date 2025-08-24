import { deleteJadwalVaksinasi, updateJadwalVaksinasi } from '@/service/action'
import { getAllJadwalVaksinasi} from '@/service/query'
import React from 'react'

const JadwalVaksin = async () => {
    const vaksinasi = await getAllJadwalVaksinasi()
  if (!vaksinasi || vaksinasi.length === 0) {
    return (
        <div className="row" style={{ marginTop: 50 }}>
        <div className="col-12 w-xl-50 px-4 mx-auto table-responsive">
            <h3>Jadwal Vaksin</h3>
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
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 w-xl-50 px-4 mx-auto table-responsive">
        <h3 className='mb-2 p-3'>Jadwal Vaksin</h3>
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
            {vaksinasi.map((item) => (
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
                <td className="align-middle text-center">{item.tanggal.toDateString()}</td>
                <td className="align-middle text-center">{item.keterangan} Minggu</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JadwalVaksin
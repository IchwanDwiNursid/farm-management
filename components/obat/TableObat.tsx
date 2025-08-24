"use client"
import { updateHargaObat } from '@/service/action'
import React, { useState } from 'react'

const TableObat = ({obats}: {obats: any}) => {
    const [obatId, setObatId] = useState("")
  return (
    <table className="table table-striped table-bordered border-primary">
          <thead className='table-primary border-primary'>
            <tr>
              <th scope="col" className="text-center">Gambar</th>
              <th scope="col" className="text-center">Name</th>
              <th scope="col" className="text-center">Indikasi</th>
              <th scope="col" className="text-center">Harga</th>
              <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {obats.map((obat: any) => (
              <tr key={obat.id}>
                <td className="align-middle text-center">
                  <img src={obat.gambar} 
                  alt="random_image"
                  width={80}
                  height={80}
                  />
                </td>
                <td className="align-middle text-center">{obat.nama}</td>
                <td className="align-middle text-center">{obat.indikasi}</td>
                <td className="align-middle text-center">{
                  new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(Number(obat.harga))}
                </td>
                <td className='align-middle text-center'>
                  {/* Modal */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => setObatId(obat.id)}
                  >
                    Edit
                  </button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Edit Obat
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <form action={updateHargaObat.bind(null, obatId)}>
                          <div className="modal-body">
                              <div className="mb-3">
                                  <label htmlFor="ayam" className="form-label">Harga</label>
                                  <input type="text" className="form-control" name="harga" id="harga" placeholder="1000.0000"/>
                              </div>
                              
                          </div>
                          <div className="modal-footer">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                            
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
  ))}
          </tbody>
        </table>
  )
}

export default TableObat
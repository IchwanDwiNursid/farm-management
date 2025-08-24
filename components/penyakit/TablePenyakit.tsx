"use client"
import { deletedPenyakit, editMortalitasAyam } from '@/service/action'
import Link from 'next/link'
import React, { useState } from 'react'

const TablePenyakit = ({penyakit}:{penyakit: any} ) => {
    const [ayamId, setAyamId] = useState("")
    const [penyebab , setPenyebab] = useState("")
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 text-end mb-3 px-5 d-flex justify-content-between">
            <h3>List Penyakit</h3>
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
                <th scope="col" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {penyakit.map((item : any) => (
              <tr key={item.id}>
                <td className="align-middle text-center">
                  <img src={item.gambar} alt="ayam_image"
                  width={80}
                  height={80}
                  />
                </td>
                <td className="align-middle text-center">
                  <img src={item.ayam.gambar} alt="ayam_image"
                  width={80}
                  height={80}
                  />
                </td>
                <td className="align-middle text-center">{item.nama}</td>
                <td className="align-middle text-center">{item.ayam.nama}</td>
                <td className="align-middle text-center">{item.gejala}</td>
                <td className="align-middle text-center">{item.deskripsi}</td>
                <td className="align-middle text-center">{item.obat.nama}</td>
                <td className='align-middle text-center'>
                  {/* Modal */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {setAyamId(item.ayam.id);setPenyebab(item.nama)}}
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
                            Edit Penyakit
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <form action={editMortalitasAyam.bind(null, ayamId,penyebab)}>
                          <div className="modal-body">
                              <div className="mb-3">
                                  <label htmlFor="ayam" className="form-label">Ayam Mati</label>
                                  <input type="text" className="form-control" name="ayam" id="ayam" placeholder="0"/>
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
                  <form action={deletedPenyakit.bind(null,item.id)}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablePenyakit
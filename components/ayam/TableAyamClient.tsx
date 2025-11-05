"use client"

import React, { useState } from 'react'

const TableAyamClient = ({ayam} : {ayam : any}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-primary">
        <tr>
          <th scope="col" className="text-center">
            Gambar
          </th>
          <th scope="col" className="text-center">
            Name
          </th>
          <th scope="col" className="text-center">
            Jumlah
          </th>
          <th scope="col" className="text-center">
            Umur
          </th>
          <th scope="col" className="text-center">
            Mortalitas
          </th>
          <th scope="col" className="text-center">
            Pakan
          </th>
          <th scope="col" className="text-center">
            Vaksin Terakhir
          </th>
          <th scope="col" className="text-center">
            Obat
          </th>
          <th scope="col" className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {ayam.map((item : any, index : any) => (
          <tr key={index + 1}>
            <td className="align-middle text-center">
              <button
                type="button"
                className="border-0 bg-transparent p-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => setSelectedImage(item.gambar || null)}
              >
                <img
                  src={item.gambar!}
                  alt="random_image"
                  width={80}
                  height={80}
                />
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
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <img src={selectedImage!} alt="big_picture" width={200} height={300} />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="align-middle text-center">{item.nama}</td>
            <td className="align-middle text-center">{item.jumlah}</td>
            <td className="align-middle text-center">
                {(() => {
                  const createdAtDate = new Date(item.createdAt);
                  if (isNaN(createdAtDate.getTime())) {
                    return "Tanggal tidak valid";
                  }
                  const weeks = Math.floor(
                    (Date.now() - createdAtDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
                  );
                  return `${weeks} Minggu`;
                })()}
            </td>
            <td className="align-middle text-center">{item.jumlah_mortalitas}</td>
            <td className="align-middle text-center">
              {item.pakan?.toLocaleString()}
            </td>
            <td className="align-middle text-center">{item.nama_vaksin}</td>
            <td className="align-middle text-center">
              {item.obat?.toLocaleString()}
            </td>
            <td className='align-middle text-center'>
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableAyamClient
"use client"
import { editMortalitasAyam } from "@/service/action";
import React from "react";

const EditButton = ({ayamId, penyakit}: {ayamId: string, penyakit: string}) => {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
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
            <form action={editMortalitasAyam.bind(null, ayamId,penyakit)}>
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
    </>
  );
};

export default EditButton;

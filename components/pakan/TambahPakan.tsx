"use client"
import {createPakan } from "@/service/action";
import {PakanSchema, PakanType} from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TambahFormPakan = () => {
    const [image, setImage] = useState<string | null>(null)

    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<PakanType>({
        mode: "all",
        resolver: zodResolver(PakanSchema)
    })

    const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const formData = new FormData();
        formData.set('gambar', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'PUT',
                    body: formData,
                })
            
                const data = await response.json();
                if (data.status !== 200) {
                    throw new Error(data.message || "Failed to upload image");
                }
                setImage(data.url);       
            } catch (error) {
                    console.error("Error uploading image:", error);
            }
        }

    const onSubmit = async (data: PakanType) => {
        if (data.gambar){
            data.gambar = {...data.gambar,name: image || ""}
        }
        await createPakan(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nama" className="form-label">
          Nama
        </label>
        <input
          {...register("nama")}
          type="text"
          className="form-control bg-transparent"
          id="nama"
          name="nama"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.nama?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="jenis" className="form-label">Jenis</label>
            <select {...register("jenis")} className="form-select bg-transparent" id="jenis">
                <option defaultValue="starter">Starter</option>
                <option value="grower">Grower</option>
                <option value="finisher">Finisher</option>
                <option value="therapy">Theraphy</option>
                <option value="mixing">Mixing</option>
                <option value="layer">Layer</option>
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.jenis?.message}</span>
            </div>
       </div>
       <div className="mb-3">
        <label htmlFor="harga" className="form-label">
          Harga
        </label>
        <input
          {...register("harga")}
          type="text"
          className="form-control bg-transparent"
          id="harga"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.harga?.message}</span>
        </div>
       </div>
       <div className="mb-3">
        <label htmlFor="gizi" className="form-label">
          Gizi
        </label>
        <input
          {...register("gizi")}
          type="text"
          className="form-control bg-transparent"
          id="gizi"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.gizi?.message}</span>
        </div>
       </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="gambar" className="form-label">
          Gambar
        </label>
        <Controller
                        name="gambar"
                        control={control}
                        render={({ field: { ref, name, onBlur, onChange } }) => {
                           return (
                               <input
                                 type="file"
                                 ref={ref}
                                 id="gambar"
                                 accept="image/*"
                                 name={name}
                                 onBlur={onBlur}
                                 onChange={(e) => {
                                   const file = e.target.files?.[0];
                                   onChange(file ? file : null);
                                   handleUploadFile(e);
                                 }}
                               />
                            );
                        }}
                  />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.gambar?.message}</span>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
            Tambah
        </button>
      </div>
    </form>
  );
};

export default TambahFormPakan;

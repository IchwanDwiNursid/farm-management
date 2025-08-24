"use client"
import { createObat } from "@/service/action";
import {ObatSchema, ObatType} from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TambahFormObat = () => {
    const [image, setImage] = useState<string | null>(null)

    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<ObatType>({
        mode: "all",
        resolver: zodResolver(ObatSchema)
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

    const onSubmit = async (data: ObatType) => {
        if (data.gambar){
            data.gambar = {...data.gambar,name: image || ""}
        }
        await createObat(data)
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
        <label htmlFor="indikasi" className="form-label">
          Indikasi
        </label>
        <input
          {...register("indikasi")}
          type="text"
          className="form-control bg-transparent"
          id="indikasi"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.indikasi?.message}</span>
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

export default TambahFormObat;

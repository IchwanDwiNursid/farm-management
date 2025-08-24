"use client";
import { createAyam } from "@/service/action";
import { AyamSchema, AyamType } from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TambahFormAyam = () => {
    const [image, setImage] = useState<string | null>(null)

    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<AyamType>({
        mode: "all",
        resolver: zodResolver(AyamSchema)
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

    const onSubmit = async (data: AyamType) => {
        if (data.gambar){
            data.gambar = {...data.gambar,name: image || ""}
        }
        await createAyam(data)
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
        <label htmlFor="jumlah" className="form-label">
          Jumlah
        </label>
        <input
          {...register("jumlah")}
          type="text"
          className="form-control bg-transparent"
          id="jumlah"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.jumlah?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="kandang" className="form-label">Kandang</label>
            <select {...register("kandang")} className="form-select bg-transparent" id="kandang">
                <option defaultValue="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.jenis?.message}</span>
            </div>
      </div>
      <div className="mb-3">
            <label htmlFor="jenis" className="form-label">Jenis</label>
            <select {...register("jenis")} className="form-select bg-transparent" id="jenis">
                <option defaultValue="pedaging">Pedaging</option>
                <option value="petelur">Petelur</option>
                <option value="hias">Hias</option>
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.jenis?.message}</span>
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

export default TambahFormAyam;

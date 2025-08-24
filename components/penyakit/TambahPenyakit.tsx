"use client";
import { Obat } from "@/app/generated/prisma";
import { createPenyakit } from "@/service/action";
import {PenyakitSchema, PenyakitType} from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TambahFormPenyakit = () => {
    const [image, setImage] = useState<string | null>(null)
    const [ayam, setAyam] = useState<{nama: string, gambar: string, id: string}[]>()
    const [obat, setObat] = useState<Obat[]>()

    const {
        handleSubmit,
        formState:{ errors},
        register,
        control
    } = useForm<PenyakitType>({
        mode: "all",
        resolver: zodResolver(PenyakitSchema)
    })

    useEffect(() => {
        const getAyam = async () => {
            const res = await fetch('/api/ayam');
            if (!res.ok) {
                throw new Error("Failed to fetch ayam");
            }
            const data = await res.json();
            setAyam(data)
        }

        const getObat = async () => {
            const res = await fetch('/api/obat');
            if (!res.ok) {
                throw new Error("Failed to fetch obat");
            }
            const data = await res.json();
            setObat(data)
        }

        getAyam()
        getObat()
    }, []);
    

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

    const onSubmit = async (data: PenyakitType) => {
        if (data.gambar){
            data.gambar = {...data.gambar,name: image || ""}
        }
        await createPenyakit(data)
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
        <label htmlFor="gejala" className="form-label">
          Gejala
        </label>
        <input
          {...register("gejala")}
          type="text"
          className="form-control bg-transparent" 
          id="gejala"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.gejala?.message}</span>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="deskripsi" className="form-label">
          Deskripsi
        </label>
        <input
          {...register("deskripsi")}
          type="text"
          className="form-control bg-transparent" 
          id="descripsi"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.deskripsi?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="pengobatan" className="form-label">Pengobatan</label>
            <select {...register("pengobatan")} className="form-select bg-transparent" id="jenis">
                {obat?.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.nama}
                    </option>
                ))}
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.pengobatan?.message}</span>
            </div>
       </div>
       <div className="mb-3">
            <label htmlFor="ayamId" className="form-label">Nama Ayam</label>
            <select {...register("ayamId")} className="form-select bg-transparent" id="ayamId">
                {ayam?.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.nama}
                    </option>
                ))}
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.ayamId?.message}</span>
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

export default TambahFormPenyakit;

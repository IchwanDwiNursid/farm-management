"use client"

import {createJadwalTindakan } from '@/service/action'
import {JadwalTindakanSchema, JadwalTindakanType } from '@/types/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const TambahJadwalTindakanForm = () => {
    const [ayam, setAyam] = useState<{nama: string, gambar: string, id: string}[]>()

    const {
        handleSubmit,
        formState:{ errors},
        register,
        setValue
    } = useForm<JadwalTindakanType>({
        mode: "all",
        resolver: zodResolver(JadwalTindakanSchema),
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

        getAyam()
    }, []);

    useEffect(() => {
        if (ayam?.length) {
            setValue("nama", ayam[0].id); // default ayam pertama
        }

    },[ayam, setValue])

    const onSubmit = async (data: JadwalTindakanType) => {
        await createJadwalTindakan(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nama" className="form-label">
          Nama Ayam
        </label>
        <select {...register("nama")} className="form-select bg-transparent" id="nama">
            {ayam?.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.nama}
                    </option>
            ))}
        </select>
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.nama?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="tanggal" className="form-label">Tanggal</label>
            <input
                {...register("tanggal", {valueAsDate: true})}
                type="date"
                className="form-control bg-transparent"
                id="tanggal"
                name="tanggal"
            />
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.tanggal?.message}</span>
            </div>
      </div>
      <div className="mb-3">
            <label htmlFor="keterangan" className="form-label">Catatan</label>
            <input
                {...register("keterangan")}
                type="text"
                className="form-control bg-transparent"
                placeholder="Memasang keranjang layer"
                id="keterangan"
                name="keterangan"
            />
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.keterangan?.message}</span>
            </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
            Tambah
        </button>
      </div>
    </form>
  )
}

export default TambahJadwalTindakanForm
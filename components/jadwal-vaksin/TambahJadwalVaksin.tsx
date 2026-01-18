"use client";

import { Vaksin } from "@/app/generated/prisma";
import { createJadwalVaksin, createPanen } from "@/service/action";
import { JadwalVaksinSchema, JadwalVaksinType, PanenSchema, PanenType } from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {useForm } from "react-hook-form";

const TambahJadwalVaksin = () => {

    const [ayam, setAyam] = useState<{nama: string, gambar: string, id: string}[]>()
    const [vaksin, setVaksin] = useState<Vaksin[]>([])

    const {
        handleSubmit,
        formState:{ errors},
        register,
        setValue
    } = useForm<JadwalVaksinType>({
        mode: "all",
        resolver: zodResolver(JadwalVaksinSchema),
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

        const getVaksin = async () => {
            const res = await fetch('/api/vaksin');
            if (!res.ok) {
                throw new Error("Failed to fetch ayam");
            }
            const data = await res.json();
            setVaksin(data)
        }

        getAyam()
        getVaksin()
    }, []);

    useEffect(() => {
        if (ayam?.length) {
            setValue("nama", ayam[0].id); // default ayam pertama
        }

        if (vaksin?.length) {
            setValue("vaksin", vaksin[0].id); // default vaksin pertama
        }
    },[vaksin, ayam, setValue])

    console.log("Ayam From API :", ayam)
    console.log("Vaksin From API :", vaksin)

    const onSubmit = async (data: JadwalVaksinType) => {
        await createJadwalVaksin(data)
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
            <label htmlFor="vaksin" className="form-label">Nama Vaksin</label>
            <select {...register("vaksin")} className="form-select bg-transparent" id="vaksin">
                {vaksin?.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.nama}
                        </option>
                ))}
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.vaksin?.message}</span>
            </div>
      </div>
      <div className="mb-3">
            <label htmlFor="tanggal" className="form-label">Tanggal</label>
            <input
                {...register("tanggal")}
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
                placeholder="Vaksin harus sesuai dosis"
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
  );
};

export default TambahJadwalVaksin;

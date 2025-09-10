"use client"
import { createBelanja } from '@/service/action';
import { BelanjaSchema, BelanjaType } from '@/types/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

const TambahFormBelanja = () => {
    const {
        handleSubmit,
        formState:{ errors},
        register,
    } = useForm<BelanjaType>({
        mode: "all",
        resolver: zodResolver(BelanjaSchema)
    })

    const onSubmit = async (data: BelanjaType) => {
        await createBelanja(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
            <label htmlFor="nama" className="form-label">Nama</label>
            <input
                {...register("nama")}
                type="text"
                className="form-control"
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
          className="form-control"
          id="jumlah"
          name="jumlah"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.jumlah?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="harga" className="form-label">Harga</label>
            <input
                {...register("harga")}
                type="text"
                className="form-control"
                id="harga"
                name="harga"
            />
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.harga?.message}</span>
            </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
            Tambah
        </button>
      </div>
    </form>
  );
}

export default TambahFormBelanja
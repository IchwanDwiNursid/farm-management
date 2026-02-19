"use client";

import { createCost, createPanen } from "@/service/action";
import { CostSchema, CostType, PanenSchema, PanenType } from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm } from "react-hook-form";

const TambahFormCost = () => {

    const {
        handleSubmit,
        formState:{ errors},
        register,
        watch
    } = useForm<CostType>({
        mode: "all",
        resolver: zodResolver(CostSchema)
    })


    const onSubmit = async (data: CostType) => {
        await createCost(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="harga" className="form-label">Harga</label>
        <input
          {...register("harga")}
          type="text"
          className="form-control bg-transparent"
          id="harga"
          name="harga"
        />
        <div aria-live="polite" aria-atomic={true}>
            <span className="text-danger mt-2">{errors.harga?.message}</span>
        </div>
      </div>
      <div className="mb-3">
            <label htmlFor="keterangan" className="form-label">Keterangan</label>
            <input
                {...register("keterangan")}
                type="text"
                className="form-control bg-transparent"
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

export default TambahFormCost;

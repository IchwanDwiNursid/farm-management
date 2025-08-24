"use client";

import { createPanen } from "@/service/action";
import { PanenSchema, PanenType } from "@/types/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm } from "react-hook-form";

const TambahFormPanen = () => {

    const {
        handleSubmit,
        formState:{ errors},
        register,
        watch
    } = useForm<PanenType>({
        mode: "all",
        resolver: zodResolver(PanenSchema)
    })

    const tindakan = watch("tindakan");

    const onSubmit = async (data: PanenType) => {
        await createPanen(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <label htmlFor="jenis" className="form-label">Jenis</label>
            <select {...register("jenis")} className="form-select" id="jenis">
                <option defaultValue="telur">Telur</option>
                <option value="daging">Daging</option>
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.jenis?.message}</span>
            </div>
      </div>
      <div className="mb-3">
            <label htmlFor="tindakan" className="form-label">Tindakan</label>
            <select {...register("tindakan")} className="form-select" id="tindakan">
                <option defaultValue="jual">Jual</option>
                <option value="konsumsi">Konsumsi</option>
            </select>
            <div aria-live="polite" aria-atomic={true}>
                <span className="text-danger mt-2">{errors.tindakan?.message}</span>
            </div>
      </div>
      {tindakan === "Jual" && (
        <div className="mb-3">
          <label htmlFor="harga" className="form-label">
            Harga
          </label>
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
      )}
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
            Tambah
        </button>
      </div>
    </form>
  );
};

export default TambahFormPanen;

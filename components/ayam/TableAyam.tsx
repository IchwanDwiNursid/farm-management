import { getAllAyam } from "@/service/query";
import { redirect } from "next/navigation";
import TableAyamClient from "./TableAyamClient";

const TableAyam = async () => {
  const ayam = await getAllAyam();
  if (!Array.isArray(ayam) || ayam.length === 0) {
    return (
      <div className="text-center my-5">
        <p>Tidak ada data ayam</p>
        <button className="btn btn-primary" onClick={() => redirect('/ayam/tambah')}>
          Tambah Ayam
        </button>
      </div>
    );
  }
  return (
    <TableAyamClient ayam={ayam}/>
  );
};

export default TableAyam;

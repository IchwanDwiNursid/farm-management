import TableAyam from "@/components/ayam/TableAyam";
import Link from "next/link";
import React from "react";

const Ayam = async() => {
  return (
    <div className="row" style={{ marginTop: 50 }}>
      <div className="col-12 d-flex justify-content-between text-end mb-3 px-4 px-md-5">
        <h3>List Ayam</h3>
            <Link href="/ayam/tambah" className="btn btn-primary" style={{ width: 80 }}>
                Tambah
            </Link>
      </div>
      <div className="col-12 w-xl-50 px-4 mx-auto table-responsive">
            <TableAyam />
      </div>
    </div>
  );
};

export default Ayam;

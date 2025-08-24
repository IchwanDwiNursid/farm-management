import { getAllJumlahAyam, getPenyakitPalingBanyak } from "@/service/query";


export default async function Home() {
  const jumlahAyam = await getAllJumlahAyam();
  const penyakitAyam = await getPenyakitPalingBanyak()
  return (
    <div className="row p-3 gap-2 justify-content-center">
      <div className="card col-12 col-md-6" >
        <div className="card-body">
          <h5 className="card-title text-success fw-bold">Ayam Sehat</h5>
          <p className="card-text">
            <span className="fw-bold">{Number(jumlahAyam)}</span> ekor
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-6">
        <div className="card-body">
          <h5 className="card-title text-danger fw-bold">Ayam Sakit</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Indikasi : {penyakitAyam?.[0] || "-"}</h6>
        </div>
      </div>
      <div className="card col-12 col-md-6">
        <div className="card-body">
          <h5 className="card-title text-warning fw-bold">Vaksin Terakhir</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">21/12/2002</h6>
          <p className="card-text">
            <span className="fw-bold">Medivak ND-IB</span>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-6">
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">Obat Terakhir</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Start : 21/12/2002</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">End : 21/12/2002</h6>
          <p className="card-text">
            <span className="fw-bold">Tetra chlor </span>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-6">
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">Virus Paling Sering</h5>
          <ul className="list-group">
          <li className="list-group-item">Newcastle Diseases "ND"</li>
          <li className="list-group-item">Gumboro</li>
          <li className="list-group-item">Coryza/ Snot</li>
          <li className="list-group-item">Pox / Cacar</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

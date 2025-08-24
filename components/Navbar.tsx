"use client";
import { useUser } from "@/context/UserContext";
import { logout } from "@/service/action";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  const linkClass = (path: string) =>
    `nav-link text-white ${pathname === path ? "fw-bold" : ""}`;

  const {userData, loading} = useUser()

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid d-flex mx-2">
        <a className="navbar-brand" href="#">
          <Image src="/logo_ayam.png" alt="logo" width={50} height={50} />
          <span className="text-white ms-2">Farm Management</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={linkClass('/')} href="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/ayam')} href={"/ayam"}>AYAM</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/pakan')} href={"/pakan"}>PAKAN</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/vaksin')} href={"/vaksin"}>VAKSIN</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/obat')} href={"/obat"}>OBAT</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/jadwal-vaksin')} href={"/jadwal-vaksin"}>JADWAL VAKSIN</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/penyakit')} href={"/penyakit"}>PENYAKIT</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/panen')} href={"/panen"}>PANEN</Link>
            </li>
            {!loading && (
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userData?.username.toUpperCase() || "John"}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {userData?.role === "admin" && (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/admin/daftar-belanja">
                            DAFTAR BELANJA
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            INCOME
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            NOTE
                          </a>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/admin/register">
                            ADD USER
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                    <form action={() => logout()}>
                      <button type="submit" className="btn">Logout</button>
                    </form>
                    </li>
                  </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

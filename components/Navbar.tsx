"use client";
import React from "react";
import { notifications } from "@/app/generated/prisma";
import { useUser } from "@/context/UserContext";
import { logout } from "@/service/action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GoBellFill } from "react-icons/go";
import Pulse from "./Pulse";

const Navbar = () => {
  const [notifications, setNotifications] = useState<notifications[]>([])
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `nav-link text-white ${pathname === path ? "fw-bold" : ""}`;

  const {userData, loading} = useUser()

  useEffect(() => {
    const getNotifications = async () => {
      const res = await fetch('/api/notifications');
      if (!res.ok) {
          throw new Error("Failed to fetch ayam");
      }
      const data = await res.json();
      setNotifications(data)
    }

    getNotifications();
  },[])

  console.log(notifications)

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top">
      <div className="container-fluid d-flex mx-2">
        <a className="navbar-brand bi bi-egg" href="#">
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
              <Link className={linkClass('/jadwal-vaksin')} href={"/jadwal-vaksin"}>SCHEDULE</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/penyakit')} href={"/penyakit"}>PENYAKIT</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/panen')} href={"/panen"}>PANEN</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass('/cost')} href={"/cost"}>COST</Link>
            </li>
            {!loading && (
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-primary"
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
                          <a className="dropdown-item" href="https://docs.google.com/spreadsheets/d/1nEAoS7lq-iMR8MtzHF_gqdl-DyzmTLfbC1zfIpntUhI/edit?gid=0#gid=0" target="_blank">
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
            <li className="nav-item dropdown">
              <div
                className="btn btn-primary position-relative"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                  <GoBellFill size={25}/>
                {notifications.length > 0 && (
                  <span
                    className="position-absolute"
                    style={{
                      padding: "6px",
                      top: "2px",
                      left: "24px"
                    }}
                  >
                    <Pulse/>
                  </span>
                )}
              </div>
              <ul className="dropdown-menu dropdown-menu-end">
                {notifications?.map((notif, index) => (
                  <React.Fragment key={notif.id}>
                    <li className="p-2 fs-6 fw-semibold dropdown-item">
                      <Link href={"/"} className="text-decoration-none">{notif.message}</Link>
                    </li>

                    {index !== notifications.length - 1 && (
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

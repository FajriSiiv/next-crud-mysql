"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function AddHook() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dataNew, setDataNew] = useState();

  const postApi = async (e: any) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        nama: nama,
        email: email,
        address: address,
      }),
    };

    try {
      await fetch("http://localhost:4000/users", requestOptions)
        .then((res) => res.json())
        .then((data: any) => setDataNew(data));
    } catch (error) {
      console.log(error, "error");
    }

    if (!(nama === "" || email === "" || address === "")) {
      setNama("");
      setEmail("");
      setAddress("");
    }
  };

  const btnSwal = (message: string) => {
    Swal.fire(message);
  };

  return (
    <div className="px-20 pt-10">
      <form onSubmit={postApi} className="flex flex-col">
        <label className="text-black-500 text-xl py-3 capitalize" htmlFor="">
          nama
        </label>
        <input
          className="border-2 w-1/2 h-10 rounded-md pl-2 text-xl"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label className="text-black-500 text-xl py-3 capitalize" htmlFor="">
          email
        </label>
        <input
          className="border-2 w-1/2 h-10 rounded-md pl-2 text-xl"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-black-500 text-xl py-3 capitalize" htmlFor="">
          address
        </label>
        <input
          className="border-2 w-1/2 h-10 rounded-md pl-2 text-xl"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className="uppercase py-2 px-10 w-52 bg-green-400 text-white rounded-lg mt-10"
        >
          Add Person
        </button>
      </form>
      {/* @ts-ignore */}
      {dataNew && btnSwal(dataNew?.message)}
      {/* <p>{dataNew ? <p>{dataNew}</p> : undefined}</p> */}
    </div>
  );
}

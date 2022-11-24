"use client";
import { use, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface PageProps {
  id: number;
  nama: string;
  email: string;
  address: string;
}

export default function HomeFun() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     await fetch("http://localhost:4000/users")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   };
  //   getData();
  // }, []);

  const [data, setData] = useState([]);

  const getAllData = async () => {
    const data = await fetch("http://localhost:4000/users").then((res) =>
      res.json()
    );

    setData(data.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  // const [dataAlls, setdataAlls] = useState([
  //   {
  //     nama: "fajir",
  //     id: 1,
  //   },
  //   {
  //     nama: "fajir 2",
  //     id: 2,
  //   },
  //   {
  //     nama: "fajir 3",
  //     id: 3,
  //   },
  // ]);
  const SwalDelete = (personId: number) => {
    const deleteUser = async (userId: any) => {
      // await fetch(`http://localhost:4000/users/${userId}`, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));

      let filtered = data.filter((e: any) => e.id !== userId);
      setData(filtered);
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Data person success delete");
        deleteUser(personId);
      }
    });
  };

  return (
    <div className="px-20 pt-20 ">
      <div className="flex flex-col gap-y-2">
        <div className="grid grid-cols-5">
          <span>NO</span>
          <span>Nama</span>
          <span>Email</span>
          <span>Address</span>
          <span className="text-center">Kontrol</span>
        </div>
        {data &&
          data.map((dataPerson: any, id: number) => (
            <div
              key={dataPerson.id}
              className="grid grid-cols-5 transition-all"
            >
              <span>{id + 1}</span>
              <span>{dataPerson.nama}</span>
              <span>{dataPerson.email}</span>
              <span>{dataPerson.address}</span>
              <div className="flex justify-center  gap-x-4">
                <button
                  className="py-2 px-5 bg-orange-500"
                  onClick={() => console.log("first")}
                >
                  {" "}
                  edit
                </button>
                <button
                  className="py-2 px-5 bg-red-500 "
                  onClick={() => SwalDelete(dataPerson.id)}
                >
                  {" "}
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

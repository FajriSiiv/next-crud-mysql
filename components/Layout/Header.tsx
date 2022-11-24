import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between px-20 pt-5">
      <h1 className="text-2xl font-bold">CRUD</h1>
      <div className="flex gap-x-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/add"}>Add</Link>
      </div>
    </div>
  );
}

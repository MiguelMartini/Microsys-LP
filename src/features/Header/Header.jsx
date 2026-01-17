import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { toast } from "sonner"





function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="p-4 flex items-center justify-between lg:px-40">
        <div className="flex flex-row gap-2 items-center">
          <span className="p-1 bg-[#E4EBFF] rounded-2xl"><img src={logo} alt="logo" className="w-12" /></span>
          <h1 className="text-[#2563EB] font-bold text-2xl">MicroSys</h1>

        </div>
        <nav className="hidden md:flex gap-6 text-gray-600 lg:flex lg:flex- lg:items-center">
          <p className="cursor-pointer hover:underline hover:text-blue-500">Recursos</p>
          <p className="cursor-pointer hover:underline hover:text-blue-500">Sobre</p>
          <p className="cursor-pointer hover:underline hover:text-blue-500">Planos</p>
          <p className="cursor-pointer hover:underline hover:text-blue-500">Equipe</p>
          <div className="flex justify-center gap-4">
            <Button title={"Entrar"} variant="secondary" onClick={() => toast.warning("Em construção")}/>
            <Button title={"Cadastrar"} onClick={() => toast.warning("Em construção")}/>
            
          </div>
        </nav>
        <button
          className="md:hidden text-black text-2xl pr-2"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white text-gray-600 font-medium flex flex-col gap-4 p-5 border-t-2 border-gray-200">
          <p className="cursor-pointer">Recursos</p>
          <p className="cursor-pointer">Sobre</p>
          <p className="cursor-pointer">Planos</p>
          <p className="cursor-pointer">Equipe</p>
          <div className="flex justify-center gap-4">
            <Button title={"Entrar"}  onClick={() => toast.warning("Em construção")}/>
            <Button title={"Cadastrar"} onClick={() => toast.warning("Em construção")}/>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

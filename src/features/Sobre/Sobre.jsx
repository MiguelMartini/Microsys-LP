import React from "react";
import { BadgeCheck } from "lucide-react";

function Sobre() {
  return (
    <div className="bg-[#F9FAFB] py-12 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-3xl font-bold text-gray-600 mb-8">
          Sobre o MicroSys
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <p className="font-light text-lg text-gray-600">
              O <span className="text-blue-600 font-semibold">MicroSys</span>{" "}
              foi desenvolvido para atender demandas de{" "}
              <span className="underline">micro</span> e{" "}
              <span className="underline">pequenos</span> empresários que buscam
              soluções completas e intuitivas para gerenciar o seu negócio.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-500 w-5 h-5" />
              <p>Cadastro de empresa e produtos</p>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-500 w-5 h-5" />
              <p>Controle total de vendas e estoque</p>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-500 w-5 h-5" />
              <p>Assistente IA para tomada de decisões</p>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-green-500 w-5 h-5" />
              <p>Relatórios e análises inteligentes</p>
            </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-b-xl shadow-xl/30 h-fit">
            <p className="text-2xl font-bold text-gray-600 pb-4">
              Diferenciais do MicroSys
            </p>
            <div className="flex flex-col gap-2 text-base text-gray-600">
              <p>• Importações de Clientes e Produtos</p>
              <p>• Integração com assistente de IA</p>
              <p>• Interface intuitiva e fácil de usar</p>
              <p>• Suporte técnico especializado</p>
              <p>• Segurança de dados garantida</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;

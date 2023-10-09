import {  useState } from "react";
import "../css/details.css"
import Nav from "./Nav"
import axios from "axios";
import { useNavigate } from "react-router-dom";
 const endpoint = 'http://127.0.0.1:8000/api/usuarios';

export default function Parametros() {
   
   
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [idrol, setIdrol] = useState(0);
    const [habilitado, setHabilitado] = useState('');
    const [fecha, setFecha] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');
    const [fechamodificacion, setFechamodificacion] = useState('');
    const [usuariocreacion, setUsuariocreacion] = useState('');
    const [usuariomodificacion, setUsuariomodificacion] = useState('');
    const [idpersona, setIdpersona] = useState('');
    const navigate = useNavigate();
    const create = async (e) => {
        e.preventDefault();

            await axios.post(`${endpoint}`, {
                idpersona: idpersona,
                usuario: usuario,
                clave: clave,
                habilitado: habilitado,
                fecha: fecha,
                idrol: idrol,
                fechacreacion: fechacreacion,
                fechamodificacion: fechamodificacion,
                usuariocreacion: usuariocreacion,
                usuariomodificacion: usuariomodificacion
            });

            

            navigate("/usuarios");


        }

    return (
        <div className="px-10 flex flex-col items-center gap-10 pb-10">
            <Nav />
            
            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between px-8">
                    <h2 className=" text-2xl font-normal">Create</h2>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={create} className="py-5 px-8">
                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input
                                type="number"
                                placeholder=""
                                onChange={(e) => setIdrol(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />

                        </section>

                    </div>
                    
                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                        <input type="text" 
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Clave</label>
                        <input type="text" 
                        onChange={(e) => setClave(e.target.value)}
                        placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Habilitado</label>
                        <input
                            type="text"
                            onChange={(e) => setHabilitado(e.target.value)}
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => setFecha(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha Creación</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => setFechacreacion(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha Modificación</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => setFechamodificacion(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario Creación</label>
                        <input
                            type="text"
                            onChange={(e) => setUsuariocreacion(e.target.value)}
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario Modificación</label>
                        <input
                            type="text"
                            onChange={(e) => setUsuariomodificacion(e.target.value)}
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID Persona</label>
                        <input
                            type="text"
                            placeholder=""
                            onChange={(e) => setIdpersona(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <button className="mt-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">Create</button>

                </form>
            </main>
        </div>
    )
}



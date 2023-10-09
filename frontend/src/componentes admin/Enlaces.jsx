import { useState, useEffect } from 'react';
import { Link, } from "react-router-dom"
import "../css/details.css"
import Nav from "./Nav"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/enlaces/';


export default function Enlaces({ datos }) {
    const [dataEnlaces, setDataEnlaces] = useState([]);

    useEffect(() => {
        if (datos && datos.length > 0) {
            setDataEnlaces(datos);
        }
    }, [datos]);


    return (
        <div className="px-10 flex flex-col gap-5">
            <Nav />

            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID Pagina
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID Rol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Rol
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataEnlaces.map((el) => (
                            <tr key={el.idenlace} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {el.idpagina}
                                </td>
                                <td className="px-6 py-4">
                                    {el.idrol}
                                </td>
                                <td className="px-6 py-4">
                                    {el.descripcion}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="p-[2px] w-[100px] rounded-lg text-white bg-green-800">Administrador</p>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link to={`/edit enlace/${el.idenlace}`}>
                                        <p className='flex bg-green-600 p-1 gap-4 rounded-md'>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2UPwrCMBSHM3oAQephXFysOOlFegmnzp7FY+gipGu8ghScPmlJaAnmjzFjPugSXn5f3muIEJkBKuAOtLmzR4ALE23ukzfAArhqwc0u2gNP4uiB7Sxc6vWzlgydVLYgNvwNHL+EGxpXm4aD56uBpa5fAQ8rvAPWqYI6OdwSuMZySg4PCPrZD/WGmzqvIHAIaYVLc1uADfD6V+Aci+7Uvf9HQWfPPLg/RuCjCIKUEWUZUexz7UP5BMNrqUhHAbtwrwUx8QEo8BbR2puCUwAAAABJRU5ErkJggg==" />
                                            <a href="#" className="font-medium text-white">Edit</a>
                                        </p>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to={`/create enlace`}>
                <a className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500" href="">
                    <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">Agregar</span>
                    <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                        <svg className="svg w-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                </a>
            </Link>
        </div>
    )
}


export const EditEnlace = () => {
    const [idpagina, setIdpagina] = useState('');
    const [idrol, setIdrol] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [fechacreacion, setFechacreacion] = useState('');
    const [fechamodificacion, setFechamodificacion] = useState('');
    const [usuariocreacion, setUsuariocreacion] = useState('');
    const [usuariomodificacion, setUsuariomodificacion] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);
    const navigate = useNavigate();
    const { idenlace } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${idenlace}`, {
                idenlace: idenlace,
                idpagina: idpagina,
                idrol: idrol,
                descripcion: descripcion,
                fechacreacion: fechacreacion,
                fechamodificacion: fechamodificacion,
                usuariocreacion: usuariocreacion,
                usuariomodificacion: usuariomodificacion
            });

            setEditSuccess(true);
            setEditError(false);

            navigate("/enlaces");
        } catch (error) {
            console.error(error);
            setEditSuccess(false);
            setEditError(error.response?.data?.error || 'Error al editar los datos.');
        }
    }

    useEffect(() => {
        const getUsuarioById = async () => {
            const response = await axios.get(`${endpoint}${idenlace}`);
            setIdpagina(response.data.idpagina);
            setIdrol(response.data.idrol);
            setDescripcion(response.data.descripcion);
            setFechacreacion(response.data.fechacreacion);
            setFechamodificacion(response.data.fechamodificacion);
            setUsuariomodificacion(response.data.usuariomodificacion);
            setUsuariocreacion(response.data.usuariocreacion);
        }
        getUsuarioById();
    }, [idenlace]);


    return (
        <div className="w-full flex justify-center items-center flex-col gap-10">
            <Nav />

            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Edit Bitacoras</h2>
                    <Link to={"/bitacoras"}>
                        <button className="flex items-center duration-200 hover:scale-125 active:scale-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                            Back
                        </button>
                    </Link>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form onSubmit={update} className="py-5 px-8">
                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID pagina</label>
                            <input value={idpagina} onChange={(e) => setIdpagina(e.target.value)} type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input value={idrol} onChange={(e) => setIdrol(e.target.value)} type="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                        <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha creacion</label>
                            <input value={fechacreacion} onChange={(e) => setFechacreacion(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">fecha modificacion</label>
                            <input value={fechamodificacion} onChange={(e) => setFechamodificacion(e.target.value)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario creacion</label>
                            <input value={usuariocreacion} onChange={(e) => setUsuariocreacion(e.target.value)} type="date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>

                        <section className="flex flex-col justify-center">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario modificacion</label>
                            <input value={usuariomodificacion} onChange={(e) => setUsuariomodificacion(e.target.value)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                        </section>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
                {editSuccess && (
                    <div className="alert alert-success">Datos editados con éxito.</div>
                )}
                {editError && (
                    <div className="alert alert-error">Error al editar los datos.</div>
                )}
            </main>
        </div>
    )

}


export const CreateEnlace = () => {


    return (
        <div className="px-10 flex flex-col items-center gap-10 pb-10">
            <Nav />

            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Create enlace</h2>
                    <Link to={"/enlaces"}>
                        <button className="flex items-center duration-200 hover:scale-125 active:scale-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                            Back
                        </button>
                    </Link>
                </div>
                <hr className="border border-gray-200 w-full" />
                <form className="py-5 px-8">
                    <div className="w-full flex justify-between">
                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID pagina</label>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"/>

                        </section>

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"/>
                        </section>

                    </div>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <button className="mt-5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">Create</button>

                </form>
            </main>
        </div>
    )
}
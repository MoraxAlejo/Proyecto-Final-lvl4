import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/details.css';
import Nav from "./Nav"
import { useNavigate, useParams } from "react-router-dom";
const endpoint = 'http://127.0.0.1:8000/api/usuarios/';


export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getAllUsuarios();
    }, []);

    const getAllUsuarios = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/usuarios`);
            setUsuarios(response.data); // Actualiza el estado con los datos de la respuesta
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const deleteUsuario = async (idusuario) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/usuarios/${idusuario}`);
            // Si la eliminación fue exitosa, actualiza la lista de usuarios
            getAllUsuarios();
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);


        }
    };


    return (
        <div className="px-10 flex flex-col gap-5">
            <Nav />

            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Persona#
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Habilitado
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
                        {usuarios.map((el) => (
                            <tr key={el.idusuario} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {el.idusuario}
                                </td>
                                <td className="px-6 py-4">
                                    {el.idpersona}
                                </td>
                                <td className="px-6 py-4">
                                    {el.usuario}
                                </td>
                                <td className="px-6 py-4">
                                    {el.habilitado}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="p-[2px] w-[100px] rounded-lg text-white bg-green-800">Administrador</p>
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <Link to={`/edit/${el.idusuario}`} className="no-underline"> <p className='flex bg-green-600 p-1 gap-4 rounded-md'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2UPwrCMBSHM3oAQephXFysOOlFegmnzp7FY+gipGu8ghScPmlJaAnmjzFjPugSXn5f3muIEJkBKuAOtLmzR4ALE23ukzfAArhqwc0u2gNP4uiB7Sxc6vWzlgydVLYgNvwNHL+EGxpXm4aD56uBpa5fAQ8rvAPWqYI6OdwSuMZySg4PCPrZD/WGmzqvIHAIaYVLc1uADfD6V+Aci+7Uvf9HQWfPPLg/RuCjCIKUEWUZUexz7UP5BMNrqUhHAbtwrwUx8QEo8BbR2puCUwAAAABJRU5ErkJggg==" />
                                        <p className="font-medium text-white">Edit</p>
                                    </p>
                                    </Link>
                                    <p className='flex bg-red-600 p-1 gap-4 rounded-md'>
                                        <button onClick={() => deleteUsuario(el.idusuario)} className="font-medium text-white">Eliminar</button>
                                    </p>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link to={`/create`}>
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


export const EditUsuario = () => {
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
    const [editSuccess, setEditSuccess] = useState(false);
    const [editError, setEditError] = useState(false);
    const navigate = useNavigate();
    const { idusuario } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${idusuario}`, {
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

            setEditSuccess(true);
            setEditError(false);

            navigate("/usuarios");
        } catch (error) {
            console.error(error);
            setEditSuccess(false);
            setEditError(error.response?.data?.error || 'Error al editar los datos.');
        }
    }


    useEffect(() => {
        const getUsuarioById = async () => {
            const response = await axios.get(`${endpoint}${idusuario}`);
            setUsuario(response.data.usuario);
            setClave(response.data.clave);
            setIdrol(response.data.idrol);
            setHabilitado(response.data.habilitado);
            setIdpersona(response.data.idpersona);
            setFecha(response.data.fecha);
            setFechamodificacion(response.data.fechamodificacion);
            setUsuariomodificacion(response.data.usuariomodificacion);
            setUsuariocreacion(response.data.usuariocreacion);
            setFechacreacion(response.data.fechacreacion);

        }
        getUsuarioById();
    }, [idusuario]);


    return (
        <div className="w-full flex justify-center items-center flex-col gap-10">
            <Nav />

            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between items-center px-8">
                    <h2 className=" text-2xl font-normal">Edit Info</h2>
                    <Link to={"/usuarios"}>
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
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID rol</label>
                            <input
                                value={idrol}
                                onChange={(e) => setIdrol(e.target.value)} // Asigna el valor a idrol
                                type="number"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />

                        </section>

                        <section className="flex flex-col justify-center ">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID usuario</label>
                            <input
                                value={idusuario} // Asigna el valor de idusuario al campo
                                readOnly // Asegura que el campo sea de solo lectura
                                type="number"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                            />
                        </section>

                    </div>
                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario</label>
                        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Clave</label>
                        <input value={clave} onChange={(e) => setClave(e.target.value)} type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                    </section>
                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Habilitado</label>
                        <input
                            value={habilitado}
                            onChange={(e) => setHabilitado(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                        <input
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha Creación</label>
                        <input
                            value={fechacreacion}
                            onChange={(e) => setFechacreacion(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Fecha Modificación</label>
                        <input
                            value={fechamodificacion}
                            onChange={(e) => setFechamodificacion(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario Creación</label>
                        <input
                            value={usuariocreacion}
                            onChange={(e) => setUsuariocreacion(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Usuario Modificación</label>
                        <input
                            value={usuariomodificacion}
                            onChange={(e) => setUsuariomodificacion(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

                    <section className="flex flex-col justify-center">
                        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">ID Persona</label>
                        <input
                            value={idpersona}
                            onChange={(e) => setIdpersona(e.target.value)}
                            type="text"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        />
                    </section>

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


import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/usuarios/';

export const EditUsuario = () => {
    const [usuario, setUsuario] = useState(''); // Inicializa con cadena vacía ''
    const [clave, setClave] = useState(''); // Inicializa con cadena vacía ''
    const [idrol, setIdrol] = useState(0); // Inicializa con 0
    const navigate = useNavigate();
    const { idusuario } = useParams();

    const update = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${endpoint}${idusuario}`, {
                usuario: usuario,
                clave: clave,
                idrol: idrol
            });

            navigate("/usuarios");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const getUsuarioById = async () => {
            const response = await axios.get(`${endpoint}${idusuario}`);
            setUsuario(response.data.usuario);
            setClave(response.data.clave);
            setIdrol(response.data.idrol);
        }
        getUsuarioById();
    }, [idusuario]);


    return (
        <div className="h-screen w-full flex justify-center items-center">
            <main className="border border-gray-300 rounded-2xl w-[600px]">
                <div className="flex py-5 justify-between px-8">
                    <h2 className=" text-2xl font-normal">Edit Info</h2>
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
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-md text-white my-5" type="submit">Save</button>
                </form>
            </main>
        </div>
    )

}

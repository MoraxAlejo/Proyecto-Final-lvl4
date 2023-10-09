import "../css/details.css"
import Nav from "./Nav"
import { Link, } from "react-router-dom"


export default function Parametros() {
    // const [dataRoles, setDataRoles] = useState([]);

    // useEffect(() => {
    //     if (datos && datos.length > 0) {
    //         setDataRoles(datos);
    //     }
    // }, [datos]);



    return (
        <div className="px-10 flex flex-col gap-5">
            <Nav/>

            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-20">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rol
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {dataRoles.map((el) => (

                            <tr key={el.idrol} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    {el.idrol}
                                </td>
                                <td className="px-6 py-4">
                                    {el.rol}
                                </td>


                            </tr>
                        ))} */}
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

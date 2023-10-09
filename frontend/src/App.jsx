import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login"
import Dashboard from "./componentes user/Dashboard"
import Edit from "./componentes user/Edit"
import Enlaces, { CreateEnlace, EditEnlace } from "./componentes admin/Enlaces"
import Usuarios from "./componentes admin/Usuarios"
import Roles, { CreateRoles } from "./componentes admin/Roles"
import Bitacoras, { CreateUBitacora, EditBitacora } from "./componentes admin/Bitacoras"
import { EditUsuario, CreateUsuario  } from "./componentes admin/Usuarios"
import Parametros from "./componentes admin/Parametros"



function App() {
  const [datos, setDatos] = useState();
    useEffect(() => {
        const promesa = fetch("http://127.0.0.1:8000/api/usuarios")
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
                alert(data.message);
            } else {
                setDatos(data);
            }
        })
    }, []);

    const [datosRoles, setDatosRoles] = useState();
    useEffect(() => {
        const promesa = fetch("http://127.0.0.1:8000/api/roles")
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
                alert(data.message);
            } else {
                setDatosRoles(data);
            }
        })
    }, []);

    const [datosBitacoras, setDatosBitacoras] = useState();
    useEffect(() => {
        const promesa = fetch("http://127.0.0.1:8000/api/bitacoras")
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
                alert(data.message);
            } else {
                setDatosBitacoras(data);
            }
        })
    }, []);

    const [datosEnlaces, setDatosEnlaces] = useState();
    useEffect(() => {
        const promesa = fetch("http://127.0.0.1:8000/api/enlaces")
        Promise.all([promesa]).then(async (values) => {
            const data = await values[0].json();
            if (data.cod === '404') {
                alert(data.message);
            } else {
                setDatosEnlaces(data);
            }
        })
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard edit" element={<Edit />} />
        <Route path="/enlaces" element={<Enlaces datos={datosEnlaces}/>} />
        <Route path="/parametros" element={<Parametros />} />
        <Route path="/usuarios" element={<Usuarios datos = {datos}/>} />
        <Route path="/roles" element={<Roles datos = {datosRoles}/>} />
        <Route path="/bitacoras" element={<Bitacoras datos = {datosBitacoras}/>} />
        <Route path="/edit/:idusuario" element={<EditUsuario/>} />
        <Route path="/edit bitacoras/:idbitacora" element={<EditBitacora />} />
        <Route path="/edit enlace/:idenlace" element={<EditEnlace />} />
        <Route path="/create usuario" element={<CreateUsuario />} />
        <Route path="/create roles" element={<CreateRoles />} />
        <Route path="/create enlace" element={<CreateEnlace />} />
        <Route path="/create bitacora" element={<CreateUBitacora />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

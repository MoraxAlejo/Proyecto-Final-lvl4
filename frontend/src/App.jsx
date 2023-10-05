import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./componentes user/Dashboard"
import Edit from "./componentes user/Edit"
import Enlaces from "./componentes admin/Enlaces"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard edit" element={<Edit />} />
        <Route path="/enlaces" element={<Enlaces/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

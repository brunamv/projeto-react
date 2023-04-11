import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contato from './Componente/Contato';
import Empresa from './Componente/Empresa';
import Home from './Componente/Home'
import Nav from './Componente/Nav'
import Footer from './Componente/Footer'

export default function App() {
  return (
      <BrowserRouter>
          <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Empresa" element={<Empresa/>}></Route>
          <Route path="/Contato" element={<Contato/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}
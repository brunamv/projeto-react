import {Link} from 'react-router-dom'
import '../index.css'


export default function Nav(){
    return(
        <div className="nav">
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Empresa'>Empresa</Link></li>
        <li><Link to='/Contato'>Contato</Link></li>
        </ul>  
        
        </div>
    )   
}
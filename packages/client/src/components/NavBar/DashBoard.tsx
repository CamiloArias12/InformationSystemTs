import { Link, Outlet } from 'react-router-dom';


export default function NavbarDashboard() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="account">Cuenta</Link>
        </li>

        <li>
          <Link to="lot">Lotes</Link>
        </li>
        <li>
          <Link to="patatoe">Tipos de papa</Link>
        </li>
	 <li>
          <Link to="seed">Siembra</Link>
        </li>
        <li>
          <Link to="production">Produccion</Link>
        </li>
	 <Outlet/>
      </ul>
    </nav>
  );
}


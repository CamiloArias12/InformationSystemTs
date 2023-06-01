import { Link, Outlet } from 'react-router-dom';

export default function NavBarLot() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="createLot">Crear lote</Link>
        </li>
        <li>
          <Link to="updateLot">Actualizar lote</Link>
        </li>
	 <li>
          <Link to="consulLot">Consultar lote</Link>
        </li>
	 <Outlet/>
      </ul>
    </nav>
  );
}




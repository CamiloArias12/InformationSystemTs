import { Link } from 'react-router-dom';

export default function NavBarPatatoe() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="createPatatoe">Crear Tipo de papa</Link>
        </li>
        <li>
          <Link to="updatePatatoe">Actualizar Tipo de papa</Link>
        </li>
	 <li>
          <Link to="consulPatatoe">Consultar Tipo de papa</Link>
        </li>

      </ul>
    </nav>
  );
}




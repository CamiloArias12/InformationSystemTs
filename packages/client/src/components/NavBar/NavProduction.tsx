import { Link } from 'react-router-dom';

export default function NavBarProduction() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="createProduction">Crear produccion</Link>
        </li>
        <li>
          <Link to="updateProduction">Actualizar produccion</Link>
        </li>
	 <li>
          <Link to="consulProduction">Consultar produccion</Link>
        </li>

      </ul>
    </nav>
  );
}




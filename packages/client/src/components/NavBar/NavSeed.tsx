import { Link } from 'react-router-dom';

export default function NavBarSeed() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="createSeed">Crear siembra</Link>
        </li>
        <li>
          <Link to="updateSeed">Actualizar siembra</Link>
        </li>
	 <li>
          <Link to="consulSeed">Consultar siembra</Link>
        </li>

      </ul>
    </nav>
  );
}




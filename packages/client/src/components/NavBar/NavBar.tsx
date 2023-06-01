import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="login">Iniciar sesion</Link>
        </li>
        <li>
          <Link to="singup">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}




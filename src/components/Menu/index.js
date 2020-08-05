import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="ReplayFlix Imagem" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Vídeo Novo
      </Button>
    </nav>
  );
}

export default Menu; // Uhuuuu

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  const URL_PAGE = `${window.location.protocol}${
    window.location.host}${
    window.location.pathname}`;

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="ReplayFlix Imagem" />
      </Link>

      {
        URL_PAGE !== `${window.location.protocol}${
          window.location.host}/cadastro/video` && (
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Vídeo Novo
          </Button>
        )
      }
    </nav>
  );
}

export default Menu; // Uhuuuu

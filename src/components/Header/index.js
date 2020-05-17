import React from 'react';
import { NavLink } from 'react-router-dom';

import ContainerCenter from '../ContainerCenter';
import './styles.css';
import logoImage from '../../assets/logotipo.svg';

export default function Header(props) {
  const links = [
    { id: 1, name: 'Home', url: '/'},
    { id: 2, name: 'Search', url: '/search'},
    { id: 3, name: 'Promo', url: '/'},
    { id: 4, name: 'About', url: '/'},
    { id: 5, name: 'Contact', url: '/'},
  ];

  return (
    <header className="header">
      <ContainerCenter newClass="header__content">
        { props.isHome
          ? <h1><img src={logoImage} alt="BFood" className="header__logotipo" /></h1>
          : <img src={logoImage} alt="BFood" className="header__logotipo" />
        }
        <nav className="header__menu">
          <ul className="header__menu-list">
            {links.map(link => (
              <li key={link.id} className="header__menu-item">
                <NavLink to={link.url} activeClassName='is-active' className="header__menu-url">{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </ContainerCenter>
    </header>
  );
}

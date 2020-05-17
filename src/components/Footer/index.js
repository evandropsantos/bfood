import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import ContainerCenter from '../ContainerCenter';

import './styles.css';

export default function Footer() {

  const links = {
    about: [
      { id: 1, name: 'History', url: '/' },
      { id: 2, name: 'Out Team', url: '/' },
      { id: 3, name: 'Brand Guidelines', url: '/' },
      { id: 4, name: 'Terms Condition', url: '/' },
      { id: 5, name: 'Privacy Polic', url: '/' },
    ],
    services: [
      { id: 1, name: 'How to Order', url: '/' },
      { id: 2, name: 'Our Product', url: '/' },
      { id: 3, name: 'Order Status', url: '/' },
      { id: 4, name: 'Promo', url: '/' },
      { id: 5, name: 'Payment Method', url: '/' },
    ],
    outher: [
      { id: 1, name: 'Contact Us', url: '/' },
      { id: 2, name: 'Help', url: '/' },
      { id: 3, name: 'Privacy', url: '/' },
    ]
  }

  return (
    <footer className="footer">
      <ContainerCenter newClass="footer__content">
        <article className="footer__title-box">
          <h4 className="footer__title">Title Here</h4>
          <p className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit dolor labore dolorem a molestias praesentium qui facilis expedita eos ipsa voluptate cumque voluptatem debitis, velit at ab neque modi.</p>

          <nav className="footer__social-navigation">
            <a href="/" className="footer__social-link" title="Instagram">
              <FaInstagram size={20} color="#222" />
            </a>
            <a href="/" className="footer__social-link" title="Facebook">
              <FaFacebookF size={20} color="#222" />
            </a>
            <a href="/" className="footer__social-link" title="Twitter">
              <FaTwitter size={20} color="#222" />
            </a>
            <a href="/" className="footer__social-link" title="WhatsApp">
              <FaWhatsapp size={20} color="#222" />
            </a>
          </nav>
        </article>
        <nav className="footer__navigation">
          <dl className="footer__list">
            <dt className="footer__title">About</dt>
            <dd>
              {links.about.map(about => (
                <a className="footer__link" href={about.url} title={about.name} key={about.id}>{about.name}</a>)
              )}
            </dd>
          </dl>
          <dl className="footer__list">
            <dt className="footer__title">Services</dt>
            <dd>
              {links.services.map(about => (
                <a className="footer__link" href={about.url} title={about.name} key={about.id}>{about.name}</a>)
              )}
            </dd>
          </dl>
          <dl className="footer__list">
            <dt className="footer__title">Outher</dt>
            <dd>
              {links.outher.map(about => (
                <a className="footer__link" href={about.url} title={about.name} key={about.id}>{about.name}</a>)
              )}
            </dd>
          </dl>
        </nav>
      </ContainerCenter>
    </footer>
  );
}

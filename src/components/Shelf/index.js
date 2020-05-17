import React from 'react';
import { FaStar } from 'react-icons/fa';

import './styles.css';

export default function Shelf(props) {

  function rating(value) {
    if(!value) { return; }

    const quantity = value.split('.')[0];
    let template = [];

    for(let i = 0; i < +quantity; i++) {
      template.push(<FaStar size={25} color="#f8c43a" key={i} />);
    }

    return template;
  }

  function template() {
    if(props.list.length > 0) {
      return (
        <ul className="shelf">
          { props.list.map(item => (
            <li key={item.id} className="shelf__item">
              <h3 className="shelf__title">{item.name}</h3>
              <img src={item.thumb} alt={item.name} className="shelf__picture" />
              <div>
                {rating(item.user_rating.aggregate_rating)}
              </div>
              <p className="shelf__text">{item.location.address}</p>
              <a className="shelf__link" href={item.url} target="_blank" rel="noopener noreferrer">Order Now</a>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="shelf__empty">Carregando...</p>
      );
    }
  }

  return template();
}

import React from 'react';

import './styles.css';

export default function Button(props) {

  return (
    <button
  className={props.newClass ? `button ${props.newClass}` : 'button button__red'}>{props.label}</button>
  );
}

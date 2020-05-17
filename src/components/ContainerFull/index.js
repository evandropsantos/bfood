import React from 'react';

import './styles.css';

export default function ContainerFull(props) {
  return (
    <div className={props.newClass ? `container-full ${props.newClass}` : 'container-full'}>{ props.children }</div>
  );
}

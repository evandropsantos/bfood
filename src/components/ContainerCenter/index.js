import React from 'react';

import './styles.css';

export default function ContainerCenter(props) {
  return (
    <div className={props.newClass ? `content-center ${props.newClass}` : 'content-center'}>{ props.children }</div>
  );
}

import React from 'react';

function Wrapper(props) {
  const style = {
    border: 'dotted blue 2px',
    padding: 24,
    margin: 12,
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;

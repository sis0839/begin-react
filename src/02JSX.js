import React from 'react';

function JSX() {
  const name = 'Seo In Seok';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };

  return (
    <>
      <div style={style}>제 이름은 {name}입니다.</div>
      <div>안녕하세요.</div>
      <div>안녕히 가세요.</div>
    </>
  );
}

export default JSX;

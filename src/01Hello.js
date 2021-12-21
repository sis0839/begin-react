import React from 'react';

function Hello({ color, name, isSpecail }) {
  return (
    <>
      <div>안녕하세요.</div>
      <div>안녕히 가세요</div>
    </>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;

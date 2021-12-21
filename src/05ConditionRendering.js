import React from 'react';

function ConditionalRendering({ isSpecial }) {
  return <div>{isSpecial && <span>Special</span>} Hello World!</div>;
}

export default ConditionalRendering;

import React, { useState } from 'react';

function Inputs2() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const onChange1 = (e) => {
    setName(e.target.value);
  };
  const onChange2 = (e) => {
    setNickname(e.target.value);
  };
  const onReset = () => {
    setName('');
    setNickname('');
  };
  return (
    <div>
      <input onChange={onChange1} value={name} />
      <input onChange={onChange2} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default Inputs2;

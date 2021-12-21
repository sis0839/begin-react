import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="������"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="�̸���"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>���</button>
    </div>
  );
}

export default CreateUser;

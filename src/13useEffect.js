import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  useEffect(() => {
    console.log('after user setted');
    console.log(user);
    return () => {
      console.log('before user setted');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>?‚­? œ</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  console.log('UserList');
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);

import { useState } from 'react';

const Form = ({ title, handleClick }) => {
  const [email, Setemail] = useState('');
  const [pass, Setpass] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => Setemail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => Setpass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export { Form };

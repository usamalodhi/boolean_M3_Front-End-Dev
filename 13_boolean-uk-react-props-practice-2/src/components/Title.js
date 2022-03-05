import { useState } from 'react';
function Title() {
  const [user, setUser] = useState('Nicolas');
  return <h1>Welcome, {user}!</h1>;
}

export default Title;

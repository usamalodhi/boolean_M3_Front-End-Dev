//frameworks and libraries
import { useState } from 'react';

//components
import Title from './components/Title';
import NameLength from './components/NameLength';
import NameReversed from './components/NameReversed';

//stylesheets
import './styles.css';

export default function App() {
  const [name, setName] = useState('Nicolas');

  return (
    <div className='app'>
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  );
}

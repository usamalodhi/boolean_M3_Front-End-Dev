import Chat from './components/Chat';
import Title from './components/Title';

import './styles.css';

export default function App() {
  return (
    <div className='app'>
      <Title />
      <Chat />
    </div>
  );
}

// ## Instructions
// * Look at the state used in `App.js`.
// * Move this state down in the lowest possible component that can manage that state

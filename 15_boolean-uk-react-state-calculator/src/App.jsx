import './App.css';
import { useState } from 'react';

const App = () => {
  let result = 0;

  const [numOne, setnumOne] = useState('0');
  const [numTwo, setnumTwo] = useState('0');
  const [operation, setOperation] = useState('+');
  const [store, setStore] = useState(0);

  switch (operation) {
    case '+':
      result = Number(numOne) + Number(numTwo);
      break;
    case '-':
      result = Number(numOne) - Number(numTwo);
      break;
    case '*':
      result = Number(numOne) * Number(numTwo);
      break;
    case '÷':
      result = Number(numOne) / Number(numTwo);
      break;
    default:
      result = 0;
  }

  const setNumOneHandler = (input) => {
    numOne === '0' ? setnumOne(input) : setnumOne(numOne + input);
  };

  const setNumTwoHandler = (input) => {
    numTwo === '0' ? setnumTwo(input) : setnumTwo(numTwo + input);
  };

  return (
    <div className='calculator'>
      <div className='panel'>
        <p>{numOne}</p>
        <div className='numbers'>
          <button onClick={() => setNumOneHandler('1')}>1</button>
          <button onClick={() => setNumOneHandler('2')}>2</button>
          <button onClick={() => setNumOneHandler('3')}>3</button>
          <button onClick={() => setNumOneHandler('4')}>4</button>
          <button onClick={() => setNumOneHandler('5')}>5</button>
          <button onClick={() => setNumOneHandler('6')}>6</button>
          <button onClick={() => setNumOneHandler('7')}>7</button>
          <button onClick={() => setNumOneHandler('8')}>8</button>
          <button onClick={() => setNumOneHandler('9')}>9</button>
          <button onClick={() => setNumOneHandler('0')}>0</button>
          <button onClick={() => setnumOne('0')}>Clear</button>
          <button onClick={() => setnumOne(store.toString())}>Recall</button>
        </div>
      </div>

      <div className='panel'>
        <p>{operation}</p>
        <div className='numbers'>
          <button onClick={() => setOperation('+')}>+</button>
          <button onClick={() => setOperation('-')}>-</button>
          <button onClick={() => setOperation('*')}>*</button>
          <button onClick={() => setOperation('÷')}>÷</button>
        </div>
      </div>

      <div className='panel'>
        <p>{numTwo}</p>
        <div className='numbers'>
          <button onClick={() => setNumTwoHandler('1')}>1</button>
          <button onClick={() => setNumTwoHandler('2')}>2</button>
          <button onClick={() => setNumTwoHandler('3')}>3</button>
          <button onClick={() => setNumTwoHandler('4')}>4</button>
          <button onClick={() => setNumTwoHandler('5')}>5</button>
          <button onClick={() => setNumTwoHandler('6')}>6</button>
          <button onClick={() => setNumTwoHandler('7')}>7</button>
          <button onClick={() => setNumTwoHandler('8')}>8</button>
          <button onClick={() => setNumTwoHandler('9')}>9</button>
          <button onClick={() => setNumTwoHandler('0')}>0</button>
          <button onClick={() => setnumTwo('0')}>Clear</button>
          <button onClick={() => setnumTwo(store.toString())}>Recall</button>
        </div>
      </div>
      <div className='panel answer'>
        <p>{result}</p>
        <button className='btn btn--small' onClick={() => setStore(result)}>
          Store
        </button>
      </div>
    </div>
  );
};

export default App;

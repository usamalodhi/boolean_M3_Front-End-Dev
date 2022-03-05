import Header from './components/header';

import initialEmails from './data/emails';

import './styles/app.css';

function App() {
  const [emails, setEmail] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);

  // console.log(initialEmails)

  return (
    <div className='app'>
      <Header />
      <nav className='left-menu'>
        <ul className='inbox-list'>
          <li
            className='item active'
            // onClick={() => {}}
          >
            <span className='label'>Inbox</span>
            <span className='count'>?</span>
          </li>
          <li
            className='item'
            // onClick={() => {}}
          >
            <span className='label'>Starred</span>
            <span className='count'>?</span>
          </li>

          <li className='item toggle'>
            <label for='hide-read'>Hide read</label>
            <input
              id='hide-read'
              type='checkbox'
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className='emails'>{/* Render a list of emails here */}</main>
    </div>
  );
}

export default App;

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import LeftMenu from './components/LeftMenu';
// import WriteEmail from './components/WriteEmails';

{
  /* <div className='emailTo'></div>
<div className='emailBody'></div> */
}

const App = () => {
  return (
    <div className='app'>
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
};
export default App;

import React, { useState } from 'react';
import Header from './components/header';
import initialEmails from './data/emails';

import './styles/app.css';

function App() {
  //set state
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Inbox');

  //helper functions and variables
  const filterReadEmails = (emails) => emails.filter((email) => !email.read);
  const filterStarredEmails = (emails) => emails.filter((email) => email.starred);
  const countStarredEmails = emails.filter((email) => email.starred);
  const countUnreadEmails = emails.filter((email) => !email.read);

  // create copy of original emails
  let filteredEmails = emails;
  if (hideRead) filteredEmails = filterReadEmails(filteredEmails);
  if (selectedTab === 'Starred') filteredEmails = filterStarredEmails(filteredEmails);

  //handler functions
  const toggleReadHandler = (targetRead) => {
    const updatedEmails = emails.map((email) => (email.id === targetRead.id ? { ...targetRead, read: !targetRead.read } : email));
    setEmails(updatedEmails);
  };

  const toggleStarHandler = (targetStarred) => {
    const updatedEmails = emails.map((email) => (email.id === targetStarred.id ? { ...targetStarred, starred: !targetStarred.starred } : email));
    setEmails(updatedEmails);
  };

  return (
    <div className='app'>
      <Header />
      <nav className='left-menu'>
        <ul className='inbox-list'>
          <li className={`item ${selectedTab === 'Inbox' ? 'active' : ''}`} onClick={() => setSelectedTab('Inbox')}>
            <span className='label'>Inbox</span>
            <span className='count'>{countUnreadEmails.length}</span>
          </li>
          <li className={`item ${selectedTab === 'Starred' ? 'active' : ''}`} onClick={() => setSelectedTab('Starred')}>
            <span className='label'>Starred</span>
            <span className='count'>{countStarredEmails.length}</span>
          </li>

          <li className='item toggle'>
            <label htmlFor='hide-read'>Hide read</label>
            <input id='hide-read' type='checkbox' checked={hideRead} onChange={(e) => setHideRead(e.target.checked)} />
          </li>
        </ul>
      </nav>
      <main className='emails'>
        <ul>
          {filteredEmails.map((email) => (
            <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
              <input type='checkbox' checked={email.read} onChange={() => toggleReadHandler(email)} />
              <input className='star-checkbox' type='checkbox' checked={email.starred} onChange={() => toggleStarHandler(email)} />
              <p>{email.sender}</p>
              <p>{email.title}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

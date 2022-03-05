import './Main.css';

import EmailToolBar from './Email/EmailToolBar';
import EmailActions from './Email/EmailActions';

import EmailBody from './Email/EmailBody';
import EmailContentHeader from './Email/EmailContentHeader';
import EmailTitle from './Email/EmailTitle';

const Main = () => {
  return (
    <main className='email-view'>
      <EmailToolBar />
      <article className='email-content'>
        <EmailTitle />
        <EmailContentHeader />
        <EmailBody />
        <EmailActions />
      </article>
    </main>
  );
};

export default Main;
{
  /* <EmailToolbar /> */
}

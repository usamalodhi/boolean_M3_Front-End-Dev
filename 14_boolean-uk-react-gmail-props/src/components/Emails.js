import Email from './Email';

const Emails = (props) => {
  return (
    <main className='emails'>
      <ul>{props.filteredEmails.map((email, index) => Email(index, email, props.toggleRead, props.toggleStar))}</ul>
    </main>
  );
};
export default Emails;

import reverse from '../helpers';

const NameReversed = (props) => {
  return (
    <p className='name-reversed'>
      Also, {props.name} backwards is {reverse(props.name)}
    </p>
  );
};

export default NameReversed;

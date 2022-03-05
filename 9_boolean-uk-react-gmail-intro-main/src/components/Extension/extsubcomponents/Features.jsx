//import images
import confidential from '../../../assets/exticons/confidential.png';
import downtriangle from '../../../assets/exticons/downtriangle.png';
import ellipvertical from '../../../assets/exticons/ellipvertical.png';
import googledrive from '../../../assets/exticons/googledrive.png';
import insertphoto from '../../../assets/exticons/insertphoto.png';
import link from '../../../assets/exticons/link.png';
import paperclip from '../../../assets/exticons/paperclip.png';
import bin from '../../../assets/exticons/rubbish.png';
import signature from '../../../assets/exticons/signature.png';
import smiley from '../../../assets/exticons/smiley.png';
import reply from '../../../assets/exticons/reply.png';
import expand from '../../../assets/exticons/expand.png';

const Features = () => {
  return (
    <div className='features'>
      <div className='features_top'>
        <div>
          <img src={reply} alt='reply' />
          <img src={downtriangle} alt='more options' />
          <p>Freepik Company (no-reply@freepik.com)</p>
        </div>
        <div>
          <img src={expand} alt='expand' />
        </div>
      </div>
      <div className='emailtextinput'>
        <textarea name='' id='' cols='30' rows='10'></textarea>
      </div>
      <div className='features_left'>
        <button>
          Send{' '}
          <span>
            <button>
              <img src={downtriangle} alt='more send options' />
            </button>
          </span>
        </button>
        <img src={paperclip} alt='attachment' />
        <img src={link} alt='insert link' />
        <img src={smiley} alt='emoticons' />
        <img src={googledrive} alt='googledrive' />
        <img src={insertphoto} alt='insertphoto' />
        <img src={confidential} alt='profile' />
        <img src={signature} alt='signature' />
      </div>
      <div className='features_right'>
        <img src={ellipvertical} alt='more' />
        <img src={bin} alt='bin' />
      </div>
    </div>
  );
};

export default Features;

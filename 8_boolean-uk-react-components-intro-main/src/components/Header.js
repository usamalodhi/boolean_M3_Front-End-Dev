import avatar from '../assets/images/avatar.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='left-menu'>
        <ul>
          <li>About</li>
          <li>Store</li>
        </ul>
      </nav>
      <nav className='right-menu'>
        <ul>
          <li>Gmail</li>
          <li>Images</li>
          <li>
            <svg className='menu-icon' focusable='false' viewBox='0 0 24 24'>
              <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z'></path>
            </svg>
          </li>
          <li>
            <img src={avatar} alt='avatar' className='avatar' height={30} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

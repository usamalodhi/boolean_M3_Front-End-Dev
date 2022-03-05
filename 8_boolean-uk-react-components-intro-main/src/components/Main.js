import './Main.css';

import LandingPageButtons from './MainSubComponents/LandingPageButtons';
import LandingPageImage from './MainSubComponents/LandingPageImage';
import Search from './MainSubComponents/Search';

const Main = () => {
  return (
    <main>
      {LandingPageImage()}
      {Search()}
      {LandingPageButtons()}
    </main>
  );
};

export default Main;

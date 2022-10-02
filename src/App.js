import './stylesheet/App.scss';
import { useAppContext } from './context/app-context';
import Intro from './components/Intro';
import Game from './components/Game';
import tessTelescope from './resources/images/tess-space-telescope.png';
import StarUniverse from './components/StarUniverse';

function App() {
  const { isIntroduction } = useAppContext();
  return (
    <div className='App'>
      <StarUniverse />
      {isIntroduction ? <Intro /> : <Game />}
      <img className='telescope' src={tessTelescope} alt='space telescope' />
    </div>
  );
}

export default App;

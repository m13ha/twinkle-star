import './stylesheet/App.scss';
import { useAppContext } from './context/app-context';
import Intro from './components/Intro';
import Game from './components/Game';
import tessTelescope from './resources/images/tess-space-telescope.png';
import StarUniverse from './components/StarUniverse';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {
  const { isIntroduction, presentLanguage, changePresentLanguage } =
    useAppContext();
  return (
    <div className='App'>
      <StarUniverse />
      {isIntroduction ? <Intro /> : <Game />}
      <img className='telescope' src={tessTelescope} alt='space telescope' />

      <Box
        sx={{
          minWidth: 120,
          zIndex: '999',
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          backgroundColor: 'white',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Language</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={presentLanguage}
            label='language'
            onChange={changePresentLanguage}
          >
            <MenuItem value={'English'}>English</MenuItem>
            <MenuItem value={'Arabic'}>Arabic</MenuItem>
            <MenuItem value={'Dutch'}>Dutch</MenuItem>
            <MenuItem value={'French'}>French</MenuItem>
            <MenuItem value={'Italian'}>Italian</MenuItem>
            <MenuItem value={'Japanese'}>Japanese</MenuItem>
            <MenuItem value={'German'}>German</MenuItem>
            <MenuItem value={'Chinese Simplified'}>Chinese Simplified</MenuItem>
            <MenuItem value={'Spanish'}>Spanish</MenuItem>
            <MenuItem value={'Russian'}>Russian</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;

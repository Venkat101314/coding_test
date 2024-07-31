import { Grid } from '@mui/material';
import Home from './components/layout/home';

function App() {
  return (
<Grid className='w-full h-dvh bg-gray-200' sx={{overflowY:'scroll'}}>
<Home />
</Grid>
  );
}

export default App;

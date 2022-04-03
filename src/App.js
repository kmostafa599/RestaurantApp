import { Stack } from '@mui/material';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Stack spacing={3}>
        <Header />
        <Banner/>
        <Menu />
      </Stack>


    </div>
  );
}

export default App;

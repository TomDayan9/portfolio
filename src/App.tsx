import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* Reset default browser styles */}
      <CssBaseline />
      {/* Navigation Bar */}
      <Navbar />
      {/* Main Content */}
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

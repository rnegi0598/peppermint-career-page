import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';

import { Box } from '@mui/material';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Teams from './components/Teams';
const theme=createTheme({
  palette:{
    primary:{
      main:'#22292f',
      text:'#c0c1c3'
    },
    secondary:{
      main:'#ffffff',
    }
  }
})
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>

      <Box>
        <Navbar/>
        <Hero/>
        <About/>
        <Story/>
        <Mission/>
        <Teams/>
        <Footer/>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App

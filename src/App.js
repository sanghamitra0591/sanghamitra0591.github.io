import { Box, Text, useColorMode } from '@chakra-ui/react';
import './App.css';
import './home.css';
import Navbar from './Pages/Navbar';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContextProvider';
import About from './Pages/About';
import Skills from './Pages/Skillls';
import Calender from './Pages/Calender';
import Stats from './Pages/Stats';
import Project from './Pages/Project';
import Contacts from './Pages/Contact';

function App() {

  // document.addEventListener('contextmenu', (e) => e.preventDefault());

  // function ctrlShiftKey(e, keyCode) {
  //   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  // }

  // document.onkeydown = (e) => {
  //   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  //   if (
  //     e.keyCode === 123 ||
  //     ctrlShiftKey(e, 'I') ||
  //     ctrlShiftKey(e, 'J') ||
  //     ctrlShiftKey(e, 'C') ||
  //     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  //   )
  //     return false;
  // };

  const { toggleColorMode, colorMode } = useColorMode();
    return (
      <div className='App'>
        {/* <div class="svg"> */}
          <div className="container" style={{bg:colorMode==="dark"? "#13022C" : "#d3cedb"}}>
            <Navbar />
            <Allroutes />
            <About />
            <Skills />
            <Calender />
            <Stats />
            <Project />
            <Contacts />
            <Box>
              <Box p="10px 0px" w="95%" m="auto" bg={colorMode==="dark"? "#13022C" : "#d3cedb"}>
                <Text fontWeight="bold" fontSize={["xs", "sm", "md"]} color={colorMode==="dark"? "white" : "#13022C"} textAlign="center">Designed and developed by Sanghamitra Satpathy, @2022 All rights reserved</Text>
              </Box>
            </Box>
          </div>
        {/* </div> */}
      </div>
    );
}

export default App;

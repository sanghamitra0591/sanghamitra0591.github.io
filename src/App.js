import { Box, Text } from '@chakra-ui/react';
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
  const {darkTheme}= useContext(ThemeContext);
    return (
      <div className='App'>
        <div className="container" style={{bg:darkTheme==="dark"? "#13022C" : "#d3cedb"}}>
          <Navbar />
          <Allroutes />
          <About />
          <Skills />
          <Calender />
          <Stats />
          <Project />
          <Contacts />
          <Box p="10px 0px" w="100%" bg={darkTheme==="dark"? "#13022C" : "#d3cedb"}>
            <Text fontWeight="bold" fontSize={["xs", "sm", "md"]} color={darkTheme==="dark"? "white" : "#13022C"} textAlign="center">Designed and developed by Sanghamitra Satpathy, @2022 All rights reserved</Text>
          </Box>
        </div>
      </div>
    );
}

export default App;

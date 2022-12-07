import { Box, Text } from '@chakra-ui/react';
import './App.css';
import './home.css';
import Navbar from './Pages/Navbar';
import "./Pages/Page.css";
import Allroutes from "./Components/Allroutes"
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContextProvider';

function App() {
  const {darkTheme}= useContext(ThemeContext);
    return (
      <div className='App'>
        <div className="container">
          <Navbar />
          <Allroutes />
          <Box p="10px 0px" w="100%" bg={darkTheme==="dark"? "#13022C" : "#d3cedb"}>
            <Text fontWeight="bold" fontSize={["xs", "sm", "md"]} color={darkTheme==="dark"? "white" : "#13022C"} textAlign="center">Designed and developed by Sanghamitra Satpathy, @2022 All rights reserved</Text>
          </Box>
        </div>
      </div>
    );
}

export default App;

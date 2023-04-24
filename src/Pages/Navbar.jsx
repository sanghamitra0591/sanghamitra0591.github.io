import { Box, Flex, IconButton, Image, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import "../home.css";
import logo from "../Images/portfolio-logo.png"
import resume from "../Images/Sanghamitra-Satpathy-Resume.pdf";


function Navbar(){

    const [isscroll, setisscroll] = useState(false);
    const { toggleColorMode, colorMode } = useColorMode();
    const [display,changeDisplay] = useState('none');


    function isScrolling() {
        if (window.scrollY > 80) {
        setisscroll(true);
        } else {
        setisscroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => {
        window.removeEventListener("scroll");
        }
    }, [])



    return <Box id="nav-menu" zIndex={1} bg={isscroll? colorMode==="light"? "#2c2244" : "#a298b3" : colorMode==="light"? "#13022C" : "#d2c6d2"} w="100%" p="10px 0px" boxShadow="md" color= "#ffffff" position="fixed">
        <Box w="95%" m="auto" display={["flex", "flex", "flex"]} alignItems="center" justifyContent="space-between">
            <Box rounded="50%" mt="5px" mb="5px" className={colorMode==="light"? "rotateno":"rotateyes"}>
                <AnchorLink href='#Home'><Image w={["30px", "30px", "40px"]} src={logo} alt="logo" /></AnchorLink>
            </Box>
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box display={["none", "none", "flex"]} gap={["auto", "15px", "20px"]} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link className="nav-link home" display="flex" to="/">
                    <AnchorLink className="nav-link home" href='#Home'><Text color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link className="nav-link about" display="flex" to="/about">
                    <AnchorLink className="nav-link about" href='#About'><Text color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link className="nav-link skills" display="flex" to="/skills">
                    <AnchorLink className="nav-link skills" href='#Skills'><Text color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link className="nav-link projects" display="flex">
                    <AnchorLink className="nav-link projects" href='#Project'><Text color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link className="nav-link contact" display="flex">
                    <AnchorLink className="nav-link contact" href='#Contactt'><Text color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text className="nav-link resume" id="resume-button-1" onClick={()=>window.open("https://drive.google.com/file/d/1Fv170bSSoWS-7ylXN6Axq7hsX1OHh6O_/view?usp=share_link", "_blank")} color={colorMode==="light"? "white" : "#1a0933"} fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href={resume} download >Resume</a></Text>
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="md"
                    onClick={toggleColorMode}
                    _hover={{color:colorMode==="light"? "#13022c" : "white"}}
                    backgroundColor={colorMode === "light" ? "#d3cedb" : "#13022C"}
                    color={colorMode==="light"? "#13022C" : "white"}
                    icon={colorMode === "light" ? <FaSun/> : <FaMoon/>}
                />
            </Box>
            <IconButton  aria-label="Open Menu"  bg="none" size="lg" p="0px"   _hover={{bg:"none"}} mr={1} color="white" icon={<HamburgerIcon w="1.7em" h="1.7em" />}  display={["flex","flex","none"]} onClick={()=> changeDisplay('flex')} />
        </Box>
       <Flex id="nav-menu">
       <Flex w="100%" h="100%" color="white" bg={isscroll?colorMode==="light"? "#13022c" : "#ad99ad" : colorMode==="light"? "#13022C" : "#c9c7c9"} zIndex={20} pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" display={display} >
       <Flex justify="flex-end"><IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" bg="none" color={colorMode==="light"? "white" : "#1a0933"} icon={<CloseIcon/>} onClick={()=> changeDisplay('none')} /></Flex>
        <Box display="flex" gap="30px" flexDir="column" align="center" fontSize="2xl" color={colorMode==="light"? "white" : "#1a0933"} >
            <AnchorLink className="nav-link home" href='#Home' onClick={()=> changeDisplay('none')}  ><Text _hover={{fontSize:"4xl"}} > Home</Text></AnchorLink>
            <AnchorLink className="nav-link about" href='#About' onClick={()=> changeDisplay('none')} ><Text _hover={{fontSize:"4xl"}} > About</Text></AnchorLink>
            <AnchorLink className="nav-link skills" href='#Skills' onClick={()=> changeDisplay('none')} ><Text _hover={{fontSize:"4xl"}} > Skills</Text></AnchorLink>
            <AnchorLink claclassNamess="nav-link projects" href='#Project' onClick={()=> changeDisplay('none')} ><Text _hover={{fontSize:"4xl"}} > Projects</Text></AnchorLink>
            <AnchorLink className="nav-link contact" href='#Contactt' onClick={()=> changeDisplay('none')} ><Text _hover={{fontSize:"4xl"}} > Contact</Text></AnchorLink>
            <Text className="nav-link resume" onClick={()=>window.open("https://drive.google.com/file/d/1Fv170bSSoWS-7ylXN6Axq7hsX1OHh6O_/view?usp=share_link", "_blank")} _hover={{textDecoration:"none", fontSize:"4xl"}} ><a href={resume} download rel="noreferrer"> Resume</a></Text>
            <Box textAlign="center">
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="md"
                    w={8}
                    h={10}
                    onClick={toggleColorMode}
                    backgroundColor={colorMode === "light" ? "#d3cedb" : "#13022C"}
                    color={colorMode==="light"? "#13022C" : "white"}
                    icon={colorMode === "light" ? <FaSun/> : <FaMoon/>}
                />
            </Box>
           </Box>
       </Flex> 
       </Flex>
    </Box>
}

export default Navbar;
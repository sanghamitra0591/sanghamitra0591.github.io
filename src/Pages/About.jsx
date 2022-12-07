import { Box, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import {ThemeContext} from "../ThemeContext/ThemeContextProvider";


function About(){
    const {darkTheme}= useContext(ThemeContext);
    return <Box id="About" bg={darkTheme==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"} color="#ffffff" p="30px 0px" mt="-2px" pt="80px">
        <Box w="87%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["90%", "80%", "40%"]} m="auto" color={darkTheme==="dark"? "white" : "#13022C"}>
                <Text textAlign="center"  fontWeight="400" mt="20px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="calibri" mt="10px" fontSize={["md", "lg", "xl"]}>
                        A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.
                        Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI, I have made some solo and 
                        collaborative projects and continue
                        to have some experience as well as acquiring more knowledge. 
                        Now I'm looking forward to enhance my skills in a challenging work environment.
                </Text>
            </Box>
            <Image w={["90%", "90%", "50%"]} m="auto" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" alt="img" />
        </Box>
    </Box>
}

export default About;

// {darkTheme==="dark"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"}
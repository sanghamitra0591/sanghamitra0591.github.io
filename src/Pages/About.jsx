import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import "../home.css";
import gif from "../Images/aboutgif.gif";


function About(){
    const { colorMode } = useColorMode();
    return <Box id="about" className="about section" bg={colorMode==="light"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"} color="#ffffff" p="30px 0px" mt="-2px" pt={["50px", "70px", "80px"]}>
        <Box id="About" w="87%" m="auto">
            <Box display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
                <Box w={["90%", "80%", "45%"]} m="auto" color={colorMode==="light"? "white" : "#13022C"}>
                    <Text textAlign="center"  fontWeight="400" mt="20px" fontSize={["2xl", "3xl", "4xl"]}>About Me</Text>
                    <Text id="user-detail-intro" fontFamily="calibri" mt="10px" fontSize={["md", "lg", "xl"]}>
                            A passionate full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.
                            Using HTML, CSS, JavaScript, React, Redux, Chakra UI and MongoDB I have made some solo and 
                            collaborative projects and continue
                            to have some experience as well as acquiring more knowledge. 
                            Now I'm looking forward to enhance my skills in a challenging work environment.
                    </Text>
                </Box>
                <Image w={["90%", "90%", "45%"]} m="auto" src={gif} alt="img" />
            </Box>
            <Box padding="20px 0px" display="flex" justifyContent="space-around" alignItems="center" color={colorMode==="light"? "white" : "#13022C"}>
                <Box>
                    <Box className="aboutcircle" rounded="50%" padding={["6px", "8px", "10px"]} bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpISbEAgaxcUr-mYQDRlSq_91HzaBWMECMQ&usqp=CAU)">
                        <Box className="aboutinner" display="flex" justifyContent="center" alignItems="center" boxSize={["45px", "60px", "80px"]} rounded="50%" bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvtJvtIPahIGUcO6pJaei-I41Wi7fScoXrA&usqp=CAU)" >
                            <Text color="#13022c" fontWeight="bold" fontSize={["sm", "lg", "xl"]}>1200+</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize={["xs", "md", "xl"]}>Hours Of</Text>
                        <Text fontSize={["xs", "md", "xl"]}>Coding</Text>
                    </Box>
                </Box>
                <Box>
                    <Box className="aboutcircle" rounded="50%" padding={["6px", "8px", "10px"]} bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpISbEAgaxcUr-mYQDRlSq_91HzaBWMECMQ&usqp=CAU)">
                        <Box className="aboutinner" display="flex" justifyContent="center" alignItems="center" boxSize={["45px", "60px", "80px"]} rounded="50%" bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvtJvtIPahIGUcO6pJaei-I41Wi7fScoXrA&usqp=CAU)" >
                            <Text color="#13022c" fontWeight="bold" fontSize={["sm", "lg", "xl"]}>700+</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize={["xs", "md", "xl"]}>Github</Text>
                        <Text fontSize={["xs", "md", "xl"]}>Commits</Text>
                    </Box>
                </Box>
                <Box>
                    <Box className="aboutcircle" rounded="50%" padding={["6px", "8px", "10px"]} bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpISbEAgaxcUr-mYQDRlSq_91HzaBWMECMQ&usqp=CAU)">
                        <Box className="aboutinner" display="flex" justifyContent="center" alignItems="center" boxSize={["45px", "60px", "80px"]} rounded="50%" bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvtJvtIPahIGUcO6pJaei-I41Wi7fScoXrA&usqp=CAU)" >
                            <Text color="#13022c" fontWeight="bold" fontSize={["sm", "lg", "xl"]}>5+</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize={["xs", "md", "xl"]}>Projects</Text>
                        <Text fontSize={["xs", "md", "xl"]}>Done</Text>
                    </Box>
                </Box>
                <Box>
                    <Box className="aboutcircle" rounded="50%" padding={["6px", "8px", "10px"]} bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpISbEAgaxcUr-mYQDRlSq_91HzaBWMECMQ&usqp=CAU)">
                        <Box className="aboutinner" display="flex" justifyContent="center" alignItems="center" boxSize={["45px", "60px", "80px"]} rounded="50%" bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvtJvtIPahIGUcO6pJaei-I41Wi7fScoXrA&usqp=CAU)" >
                            <Text color="#13022c" fontWeight="bold" fontSize={["sm", "lg", "xl"]}>110+</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize={["xs", "md", "xl"]}>Hours Of</Text>
                        <Text fontSize={["xs", "md", "xl"]}>Soft Skills</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default About;

// {colorMode==="light"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"}
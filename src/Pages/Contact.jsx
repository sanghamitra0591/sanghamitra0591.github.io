import { Box, Button, Text, Input, Textarea, useColorMode, useToast } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdCall, MdSend } from "react-icons/md";
import "./Page.css";
import React from 'react';
import emailjs from '@emailjs/browser';
import "./Page.css";
import { useState } from "react";

function Contacts(){

    const { colorMode } = useColorMode();

    const toast = useToast();

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_3i8hq0k', 'template_mwm1m6l', values, 'i5rrp59HT6jNdKwT8')
        .then(response => {
            console.log('SUCCESS!', response);
            console.log(values);
            setValues({
            fullName: '',
            email: '',
            message: ''
            });
            toast({
                title: 'Message Sent.',
                status: 'success',
                duration: 3000,
                isClosable: true
            })
        }, error => {
            console.log('FAILED...', error);
        });
    }

  const handleChange = (e) => {
    setValues(values => ({...values, [e.target.name]: e.target.value }));
  }

    return <Box id="Contact" bg={colorMode==="light"? "linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" : "#bdb6c9"} color={colorMode==="light"? "white" : "#13022C"} p={["30px 0px", "30px 0px", "60px 0px"]} pt="75px">
        <Text fontWeight="400" fontSize={["2xl", "3xl", "4xl"]} textAlign="center" mb="20px">Contact Me</Text>
        <Box w={["80%", "85%", "85%"]} m="auto" mt="50px" textAlign="center" p="60px auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["80%", "80%", "40%"]} m="auto" display={["none", "none", "inline"]}>
                <Box w="100%" p={["15px", "38px", "15px"]} display="grid" gap="20px" gridTemplateColumns={["Repeat(4, 1fr)", "Repeat(4, 1fr)", "Repeat(2, 1fr)"]}>
                    <Box mb="20px">
                        <a href="tel:7894272853" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "20px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><MdCall />
                            </Button>
                        </a>
                    </Box>
                    <Box mb="20px">
                        <a href = "mailto: sanghamitramymail@gmail.com" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "20px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><AiOutlineMail />
                            </Button>
                        </a>
                    </Box>
                    <Box mb="20px">
                        <a href="https://github.com/sanghamitra0591" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "20px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><AiOutlineGithub />
                            </Button>
                        </a>
                    </Box>
                    <Box mb="20px">
                        <a href="https://www.linkedin.com/in/sanghamitra-satpathy/" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "20px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"}
                                border="none" variant='solid'><AiOutlineLinkedin />
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Box>
            <Box  className={colorMode==="light"?"contact": "contactlight"} width={["80%", "70%", "50%"]} m={["auto","auto", ""]} pt="40px">
                <Box width="80%" m="auto">
                    <form onSubmit={handleSubmit} >
                        <Text fontSize={["2xl", "4xl", "3xl"]} color={colorMode==="light"? "white" : "#13022C"} fontWeight="600">Message Me</Text>
                        <br/>
                        <Input fontSize={["15px", "16px", "16px"]} outline={colorMode==="light"? "1px solid #C1B6DB" : "1px solid #13022C"} borderColor={colorMode==="light"? "rgba(200, 137, 230, 0.637)" : "#13022C"} w="100%" color={colorMode==="light"? "white" : "#13022C"} value={values.fullName} required={"required"} onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Enter your Name here"/>
                        <br/>
                        <Input fontSize={["15px", "16px", "16px"]} outline={colorMode==="light"? "1px solid #C1B6DB" : "1px solid #13022C"} mt="15px" borderColor={colorMode==="light"? "rgba(200, 137, 230, 0.637)" : "#13022C"} value={values.email} required={"required"} color={colorMode==="light"? "white" : "#13022C"} onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="Enter your Email Id here"/>
                        <br/>
                        <Textarea fontSize={["15px", "16px", "16px"]} outline={colorMode==="light"? "1px solid #C1B6DB" : "1px solid #13022C"} mt="15px" borderColor={colorMode==="light"? "rgba(200, 137, 230, 0.637)" : "#13022C"} value={values.message} required={"required"} color={colorMode==="light"? "white" : "#13022C"} onChange={handleChange} label="Your message here" name="message" placeholder="Enter your Message here"/>
                        <br/>
                        <Button _hover={{bg:"#4E406F", color:"#ffffff"}} mt="15px" p={["10px", "10px", "15px"]} fontSize={["sm", "sm", "md"]} bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} border="none" variant='solid' type="submit" _focus={{outline:"none"}} value="Send" rightIcon={<MdSend />}>Send</Button>
                    </form>
                </Box>
            </Box>
            <Box w={["80%", "80%", "40%"]} m="auto" display={["inline", "inline", "none"]}>
                <Box w="90%" m="auto" p={["35px", "50px", "15px"]} pb="0px" display="grid" gap="20px" gridTemplateColumns={["Repeat(4, 1fr)", "Repeat(4, 1fr)", "Repeat(2, 1fr)"]}>
                    <Box>
                        <a href="tel:7894272853" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "10px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><MdCall />
                            </Button>
                        </a>
                    </Box>
                    <Box>
                        <a href = "mailto: sanghamitramymail@gmail.com" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "10px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><AiOutlineMail />
                            </Button>
                        </a>
                    </Box>
                    <Box>
                        <a href="https://github.com/sanghamitra0591" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "10px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"} 
                                border="none" variant='solid'><AiOutlineGithub />
                            </Button>
                        </a>
                    </Box>
                    <Box>
                        <a href="https://www.linkedin.com/in/sanghamitra-satpathy/" rel="noreferrer" target="_blank">
                            <Button _hover={{bg:"#4E406F", color:"#ffffff"}} p={["0px", "10px", "35px"]} fontSize={["2xl", "4xl", "6xl"]}
                                bg={colorMode==="light"? "#C1B6DB" : "#251942"} color={colorMode==="light"? "#13022c" : "white"}
                                border="none" variant='solid'><AiOutlineLinkedin />
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Contacts;

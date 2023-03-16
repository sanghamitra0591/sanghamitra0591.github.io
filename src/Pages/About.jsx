import { Box, Image, Text } from "@chakra-ui/react";


function About(){
    return <Box id="About" bg="linear-gradient(180deg, rgba(44,23,75,1) 45%, rgba(28,14,50,1) 99%)" color="#ffffff" p="30px 0px" mt="-2px" pt="80px">
        <Box w="87%" m="auto" display={["inline", "inline", "flex"]} justifyContent="space-between" alignItems="center">
            <Box w={["90%", "80%", "40%"]} m="auto">
                <Text textAlign="center"  fontWeight="400" mt="20px" fontSize={["3xl", "4xl", "5xl"]}>About Me</Text>
                <Text fontFamily="calibri" mt="10px" fontSize={["md", "lg", "xl"]}>
                        A full stack web developer having knowledge in Data Structure, Algorithms, and Programming languages.
                        Knowing JavaScript, HTML, CSS, React, Redux, Mern Stack, MongoDB and Chakra UI, I have made some solo and 
                        collaborative projects and continue
                        to have some experience as well as acquiring more knowledge. 
                        Now I'm looking forward to enhance my skills in a challenging work environment.
                </Text>
            </Box>
            <Image w={["90%", "90%", "50%"]} m="auto" src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif" alt="img" />
        </Box>
    </Box>
}

export default About;
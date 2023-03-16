import { Box, Image, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar(){

    return <Box zIndex={1} bg="#13022C" w="100%" p="10px 0px" boxShadow="md" color= "#ffffff" position="fixed">
        <Box w="95%" m="auto" display={["inline", "flex", "flex"]} justifyContent="space-between" textAlign={["center", "", ""]}>
            <Box rounded="50%" ml={["45%", "0%", "0%"]} mt="5px" mb="5px">
                <Image w={["30px", "30px", "40px"]} src="https://seeklogo.com/images/S/s-letter-logo-3FDB009CF3-seeklogo.com.png" alt="logo" />
            </Box>
            {/* <Text fontWeight="bold" ml={["15px", "2px", "10px"]} fontSize={['xl', '2xl', '3xl']}>Sanghamitra</Text> */}
            <Box display="flex" gap={["auto", "15px", "20px"]} justifyContent={["space-around", "space-between", "space-between"]} ml="10px" alignItems="center">
                <Link display="flex" to="/">
                    <AnchorLink href='#Home'><Text color="white" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Home</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/about">
                    <AnchorLink href='#About'><Text color="white" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>About</Text></AnchorLink>
                </Link>
                <Link display="flex" to="/skills">
                    <AnchorLink href='#Skills'><Text color="white" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Skills</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Project'><Text color="white" fontWeight="500" _active={{textDecoration:"underlined"}} fontSize={['sm', 'sm', 'lg']}>Project</Text></AnchorLink>
                </Link>
                <Link display="flex">
                    <AnchorLink href='#Contact'><Text color="white" fontWeight="500" fontSize={['sm', 'sm', 'lg']}>Contact</Text></AnchorLink>
                </Link>
                <Text color="white" fontWeight="500" fontSize={['sm', 'sm', 'lg']}><a href="https://drive.google.com/file/d/1Z4KoBqG3TcpKwiECWCCrMNZYrqW17KtV/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></Text>
            </Box>
        </Box>
    </Box>
}

export default Navbar;
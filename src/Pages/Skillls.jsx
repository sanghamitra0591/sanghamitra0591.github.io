import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiRedux, SiMaterialui, SiCypress, SiNpm, SiNetlify, SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import "./Page.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";


function Skills(){

    const allskills=[
        {
            text: "HTML",
            iconas: ImHtmlFive2,
        },
        {
            text: "CSS",
            iconas: RiCss3Fill,
        },
        {
            text: "JavaScript",
            iconas: TbBrandJavascript,
        },
        {
            text: "React",
            iconas: RiReactjsFill,
        },
        {
            text: "Chakra UI",
            iconas: SiChakraui,
        },
        {
            text: "Material UI",
            iconas: SiMaterialui,
        },
        {
            text: "Redux",
            iconas: SiRedux,
        },
        {
            text: "MongoDB",
            iconas: SiMongodb,
        },
        {
            text: "Node JS",
            iconas: FaNode,
        },
        {
            text: "Cypress",
            iconas: SiCypress,
        },
        {
            text: "Express JS",
            iconas: SiExpress,
        },
        {
            text: "Git",
            iconas: FaGitAlt,
        },
        {
            text: "NPM",
            iconas: SiNpm,
        },
        {
            text: "Netlify",
            iconas: SiNetlify,
        },
        {
            text: "VS Code",
            iconas: SiVisualstudiocode,
        }
    ]
    const frontend= [
        {
            text: "HTML",
            iconas: ImHtmlFive2,
        },
        {
            text: "CSS",
            iconas: RiCss3Fill,
        },
        {
            text: "JavaScript",
            iconas: TbBrandJavascript,
        },
        {
            text: "React",
            iconas: RiReactjsFill,
        },
        {
            text: "Chakra UI",
            iconas: SiChakraui,
        },
        {
            text: "Material UI",
            iconas: SiMaterialui,
        },
        {
            text: "Redux",
            iconas: SiRedux,
        },
    ]
    const backend= [
        {
            text: "MongoDB",
            iconas: SiMongodb,
        },
        {
            text: "Node JS",
            iconas: FaNode,
        },
        {
            text: "Cypress",
            iconas: SiCypress,
        },
        {
            text: "Express JS",
            iconas: SiExpress,
        },
    ]
    const tools= [
        {
            text: "Git",
            iconas: FaGitAlt,
        },
        {
            text: "NPM",
            iconas: SiNpm,
        },
        {
            text: "Netlify",
            iconas: SiNetlify,
        },
        {
            text: "VS Code",
            iconas: SiVisualstudiocode,
        }
    ]

    const {darkTheme}= useContext(ThemeContext);

return <Box id="Skills" w="full" bg={darkTheme==="dark"? "#13022C" : "#d3cedb"} color="#ffffff" p="30px 0px" mt="-2px" pt="100px">
        <Box w="85%" m="auto" color={darkTheme==="dark"? "white" : "#13022C"}>
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>Technical Skills & Tools</Text>
            <Tabs variant='unstyled'>
                <TabList m="20px auto" w={["80%", "85%", "55%"]} gap="5px" justifyContent="space-between">
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={darkTheme==="dark"?"#4E406F": "#9c8ebe"} _selected={darkTheme==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>All Skills</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={darkTheme==="dark"?"#4E406F": "#9c8ebe"} _selected={darkTheme==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Frontend</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={darkTheme==="dark"?"#4E406F": "#9c8ebe"} _selected={darkTheme==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Backend</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={darkTheme==="dark"?"#4E406F": "#9c8ebe"} _selected={darkTheme==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Tools</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {allskills && allskills.map((el)=>{
                                return <Box className={darkTheme==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={darkTheme==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]} >
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={darkTheme==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {frontend && frontend.map((el)=>{
                                return <Box className={darkTheme==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={darkTheme==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={darkTheme==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {backend && backend.map((el)=>{
                                return <Box className={darkTheme==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={darkTheme==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={darkTheme==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {tools && tools.map((el)=>{
                                return <Box className={darkTheme==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={darkTheme==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={darkTheme==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
}

export default Skills;

//_selected={darkTheme==="dark"?  {{ color: '#13022c', bg: '#C1B6DB' }}  : {{ color: 'white', bg: '#665492' }}}
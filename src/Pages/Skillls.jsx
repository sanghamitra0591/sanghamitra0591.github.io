import { Box, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill, RiReactjsFill } from "react-icons/ri";
import { SiChakraui, SiExpress, SiMongodb, SiRedux, SiMaterialui, SiCypress, SiNpm, SiNetlify, SiVisualstudiocode, SiVercel, SiPostman } from "react-icons/si";
import { FaGitAlt, FaNode } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import "./Page.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";


function Skills(){

    const allskills=[
        {
            id: 1,
            text: "HTML",
            iconas: ImHtmlFive2,
        },
        {
            id: 2,
            text: "CSS",
            iconas: RiCss3Fill,
        },
        {
            id: 3,
            text: "JavaScript",
            iconas: TbBrandJavascript,
        },
        {
            id: 4,
            text: "React",
            iconas: RiReactjsFill,
        },
        {
            id: 5,
            text: "Chakra UI",
            iconas: SiChakraui,
        },
        // {
        //     id: 6,
        //     text: "Material UI",
        //     iconas: SiMaterialui,
        // },
        {
            id: 7,
            text: "Redux",
            iconas: SiRedux,
        },
        {
            id: 8,
            text: "MongoDB",
            iconas: SiMongodb,
        },
        {
            id: 9,
            text: "Node JS",
            iconas: FaNode,
        },
        // {
        //     id: 10,
        //     text: "Cypress",
        //     iconas: SiCypress,
        // },
        {
            id: 11,
            text: "Express JS",
            iconas: SiExpress,
        },
        {
            id: 12,
            text: "Git",
            iconas: FaGitAlt,
        },
        {
            id: 13,
            text: "NPM",
            iconas: SiNpm,
        },
        {
            id: 14,
            text: "Netlify",
            iconas: SiNetlify,
        },
        {
            id: 15,
            text: "VS code",
            iconas: SiVisualstudiocode,
        },
        {
            id: 16,
            text: "Vercel",
            iconas: SiVercel,
        },
        {
            id: 17,
            text: "Thunder Client",
            iconas: AiFillThunderbolt,
        },
        {
            id: 18,
            text: "Postman",
            iconas: SiPostman,
        }
    ]
    const frontend= [
        {
            id: 1,
            text: "HTML",
            iconas: ImHtmlFive2,
        },
        {
            id: 2,
            text: "CSS",
            iconas: RiCss3Fill,
        },
        {
            id: 3,
            text: "JavaScript",
            iconas: TbBrandJavascript,
        },
        {
            id: 4,
            text: "React",
            iconas: RiReactjsFill,
        },
        {
            id: 5,
            text: "Chakra UI",
            iconas: SiChakraui,
        },
        // {
        //     id: 6,
        //     text: "Material UI",
        //     iconas: SiMaterialui,
        // },
        {
            id: 7,
            text: "Redux",
            iconas: SiRedux,
        },
    ]
    const backend= [
        {
            id: 1,
            text: "MongoDB",
            iconas: SiMongodb,
        },
        {
            id: 2,
            text: "Node JS",
            iconas: FaNode,
        },
        // {
        //     id: 3,
        //     text: "Cypress",
        //     iconas: SiCypress,
        // },
        {
            id: 4,
            text: "Express JS",
            iconas: SiExpress,
        },
    ]
    const tools= [
        {
            id: 1,
            text: "Git",
            iconas: FaGitAlt,
        },
        {
            id: 2,
            text: "NPM",
            iconas: SiNpm,
        },
        {
            id: 3,
            text: "Netlify",
            iconas: SiNetlify,
        },
        {
            id: 4,
            text: "VS Code",
            iconas: SiVisualstudiocode,
        },
        {
            id: 5,
            text: "Vercel",
            iconas: SiVercel,
        },
        {
            id: 6,
            text: "Thunder Client",
            iconas: AiFillThunderbolt,
        },
        {
            id: 7,
            text: "Postman",
            iconas: SiPostman,
        }
    ]

    const { toggleColorMode, colorMode } = useColorMode();

return <Box id="Skills" w="full" bg={colorMode==="dark"? "#13022C" : "#d3cedb"} color="#ffffff" p="30px 0px" mt="-2px" pt={["70px", "100px", "100px"]}>
        <Box w="85%" m="auto" color={colorMode==="dark"? "white" : "#13022C"}>
            <Text textAlign="center" mb="15px" fontWeight="400" fontSize={["2xl", "4xl", "5xl"]}>Technical Skills & Tools</Text>
            <Tabs variant='unstyled'>
                <TabList m="20px auto" w={["80%", "85%", "55%"]} gap="5px" justifyContent="space-between">
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={colorMode==="dark"?"#4E406F": "#9c8ebe"} _selected={colorMode==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>All Skills</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={colorMode==="dark"?"#4E406F": "#9c8ebe"} _selected={colorMode==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Frontend</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={colorMode==="dark"?"#4E406F": "#9c8ebe"} _selected={colorMode==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Backend</Tab>
                    <Tab p={["5px", "10px", "10px 15px"]} fontSize={["10px", "15px", "20px"]} bg={colorMode==="dark"?"#4E406F": "#9c8ebe"} _selected={colorMode==="dark"? {color:'#13022c', bg:'#C1B6DB'} : {color:'white', bg:'#423267'}}>Tools</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {allskills && allskills.map((el)=>{
                                return <Box key={el.id} className={colorMode==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={colorMode==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]} >
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={colorMode==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {frontend && frontend.map((el)=>{
                                return <Box key={el.id} className={colorMode==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={colorMode==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={colorMode==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {backend && backend.map((el)=>{
                                return <Box key={el.id} className={colorMode==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={colorMode==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={colorMode==="dark"? "white" : "#13022C"} />
                                                <Text fontSize={["10px", "15px", "20px"]} mt="10px">{el.text}</Text>
                                            </Box>
                                        </Box>
                            })}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="grid" gap={["20px", "30px", "40px"]} gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} textAlign="center">
                            {tools && tools.map((el)=>{
                                return <Box key={el.id} className={colorMode==="dark"?"skillouter":"skillouterlight"} p={["10px", "15px", "17px"]} h={["120px", "160px", "180px"]}>
                                            <Box className={colorMode==="dark"?"skillinner":"skillinnerlight"} p={["5px", "7px", "15px"]}>
                                                <Icon as={el.iconas} w={["30px", "35px", "50px"]} h="50px" color={colorMode==="dark"? "white" : "#13022C"} />
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

//_selected={colorMode==="dark"?  {{ color: '#13022c', bg: '#C1B6DB' }}  : {{ color: 'white', bg: '#665492' }}}
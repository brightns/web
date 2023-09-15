import {Box, Burger, Center, Container, Divider, Flex, Paper, Text, Title, Transition} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks"

function App() {
    const [opened, {toggle}] = useDisclosure(false)
    return (
        <Container size={'lg'} pos={'relative'}>
            <Flex justify={'space-between'} align={'center'} h={60}>
                <Text weight={'bold'}>
                    VisionNets
                </Text>
                <Burger color={'white'} opened={opened} onClick={toggle} transitionDuration={2000}/>
                <Transition transition="pop-top-right" duration={600} mounted={opened}>
                    {(styles) => (
                        <Paper pos={'absolute'} withBorder style={styles} w={400}>
                            asdf
                        </Paper>
                    )}
                </Transition>
            </Flex>
            <Box my={100}>

                <Text size={50} weight={'bold'} ta={'center'} maw={600} mx="auto">
                    Custom Industrial Vision AI Applications
                </Text>

                <Center maw={400} mx="auto">
                    <Text align={'center'}>
                        VisionNets is a custom industrial vision AI solution that can be deployed on-premise or in the
                        cloud.
                    </Text>
                </Center>
            </Box>
            <Divider w={'50%'} my={"md"}/>
            <Title order={2}>
                Custom Vision AI Developments
            </Title>

            <Divider w={'50%'} my={"md"}/>
            <Title order={2}>
                Custom Applications
            </Title>
            <Divider my={"xl"}/>
            <Title order={2} align={'center'}>
                Use cases
            </Title>
            <Box bg={'dark'} sx={{borderRadius: 6}} my={'lg'} p={'md'}>
                Custom train OCR models for your specific use case.
            </Box>
            <Box bg={'dark'} sx={{borderRadius: 6}} my={'lg'} p={'md'}>
                Custom train OCR models for your specific use case.
            </Box>

            <Box bg={'dark'} sx={{borderRadius: 6}} my={'lg'} p={'md'}>
                Custom train OCR models for your specific use case.
            </Box>
        </Container>
    )
}

export default App

import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m Anthony Fiset. I&apos;m a software developer and a student at York University.
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Anthony Fiset
                    </Heading>

                </Box>
            </Box>
        </Container>
    )
    }

    export default Page
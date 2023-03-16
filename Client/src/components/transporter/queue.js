
import {

    Button,
    Stack,
    Text,
    Grid,
    GridItem,
    WrapItem,

} from '@chakra-ui/react';


export const Queue = () => {

    return (
        <>

            <Stack mt={3} ml={3} direction={'row'} spacing={40}>
                <Text color="black" fontWeight="bold">In Queue</Text>
                <Text color="black" fontWeight="bold">20ft/40ft</Text>
            </Stack>


            <div className="row">
                <div className="">

                    <Grid
                        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
                        gridTemplateRows={'50px 1fr 40px'}
                        gridTemplateColumns={'250px 1fr'}
                        h='200px'
                        gap='0'
                        color='blackAlpha.700'
                        fontWeight='bold'
                        m={5}
                        border='1px'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        backgroundColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='8' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='4' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
                            <WrapItem>
                                <Button colorScheme='blue' size='sm'>Cancel</Button>
                            </WrapItem>
                        </GridItem>
                    </Grid>

                    <Grid
                        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
                        gridTemplateRows={'50px 1fr 40px'}
                        gridTemplateColumns={'250px 1fr'}
                        h='200px'
                        gap='0'
                        color='blackAlpha.700'
                        fontWeight='bold'
                        m={5}
                        border='1px'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        backgroundColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='8' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='4' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
                            <WrapItem>
                                <Button colorScheme='blue' size='sm'>Cancel</Button>
                            </WrapItem>
                        </GridItem>
                    </Grid>

                    <Grid
                        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
                        gridTemplateRows={'50px 1fr 40px'}
                        gridTemplateColumns={'250px 1fr'}
                        h='200px'
                        gap='0'
                        color='blackAlpha.700'
                        fontWeight='bold'
                        m={5}
                        border='1px'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        backgroundColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='8' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='8' pt='4' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='4' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
                            <WrapItem>
                                <Button colorScheme='blue' size='sm'>Cancel</Button>
                            </WrapItem>
                        </GridItem>
                    </Grid>



                </div>
            </div>



        </>
    );
}



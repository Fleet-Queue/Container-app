import React from 'react';

import {
    Button,
    Stack,
    Text,
    Grid,
    GridItem,
    WrapItem,

} from '@chakra-ui/react';

export const Alotted = () => {


    return (
        <>

            <Stack mt={3} ml={3} direction={'row'} spacing={40}>
                <Text color="black" fontWeight="bold">Alotted/Ongoing</Text>
                <Text color="black" fontWeight="bold">20ft/40ft</Text>
            </Stack>

            <div className="row">
                <div className="posters">

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
                        m={2}
                        border='1px'
                        backgroundColor='#D4E5F6'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='2' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='0' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
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
                        m={2}
                        border='1px'
                        backgroundColor='#D4E5F6'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='2' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='0' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
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
                        m={2}
                        border='1px'
                        backgroundColor='#D4E5F6'
                        borderRadius='10px'
                        borderColor='#D4E5F6'
                        boxShadow={'md'}
                    >

                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='2xl' area={'header'}>
                            KL-40-1234
                        </GridItem>
                        <GridItem pl='2' pt='1' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
                            NATIONAL TRANSPORT <br />
                            ALL KERALA TRANSPORT<br />
                            LOCAL TRANSPORT

                        </GridItem>
                        <GridItem pl='2' bg='#D4E5F6' area={'main'}>
                            20 FT
                        </GridItem>
                        <GridItem pl='0' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
                            <WrapItem>
                                <Button colorScheme='blue' size='sm'>Cancel</Button>
                            </WrapItem>
                        </GridItem>
                    </Grid>



                </div>
            </div>


            <style>
                {`
            
              .row{
                
              
          
            }
            .posters{
              display: flex;
          
                 overflow-x: scroll;
                 overflow-y: hidden;
          }
          .posters::-webkit-scrollbar{
            display:none;
          `}
            </style>







        </>
    );
}





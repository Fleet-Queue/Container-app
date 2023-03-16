import React from 'react';
import { Button, Stack, Text, Grid, GridItem, WrapItem } from '@chakra-ui/react';

export const Alotted = () => {

    const data = [
        { id: 1, header: 'KL-40-1234', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '20 FT' },
        { id: 2, header: 'KL-40-5678', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '40 FT' },
        { id: 3, header: 'KL-40-9012', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '20 FT' }
      ];
  return (
    <>
      <Stack mt={3} ml={3} direction={'row'} spacing={40}>
        <Text color="black" fontWeight="bold">Alotted/Ongoing</Text>
        <Text color="black" fontWeight="bold">20ft/40ft</Text>
      </Stack>

      <div className="row">
        <div className="posters">
          {data.map((item) => (
            <Grid
              key={item.id}
              templateAreas={`"header header" "nav main" "nav footer"`}
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
                {item.header}
              </GridItem>
             <GridItem key={item.id} pl='2' pt='1' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
            <span dangerouslySetInnerHTML={{__html: item.nav}} />
             </GridItem>
              <GridItem pl='2' bg='#D4E5F6' area={'main'}>
                {item.main}
              </GridItem>
              <GridItem pl='0' pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
                <WrapItem>
                  <Button colorScheme='blue' size='sm'>Cancel</Button>
                </WrapItem>
              </GridItem>
            </Grid>
          ))}
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

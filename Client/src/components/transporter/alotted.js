import React from 'react';
import { Button, Stack, Text, Grid, GridItem, WrapItem, Spacer } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from '@chakra-ui/react'
export const Alotted = () => {

    const data = [
        { id: 1, header: 'KL-40-1234', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '20 FT' },
        { id: 2, header: 'KL-40-5678', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '40 FT' },
        { id: 3, header: 'KL-40-9012', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '20 FT' },
        
      ];

      const vTypes = ['National Transport', 'All Kerala Transport', 'Local Transport'];

      const daata = [
        { id: 1, header: 'KL-40-1234', nav:[{NationalTransport:'5',
      AllKerala:'08',
      LocalTransport:'10'
        }
      ], main: '20 FT' },
        { id: 2, header: 'KL-40-5678', nav:[{NationalTransport:'5',
        AllKerala:'08',
        LocalTransport:'10'
          }
        ], main: '40 FT' },
        { id: 3, header: 'KL-40-9012',nav:[{NationalTransport:'5',
        AllKerala:'08',
        LocalTransport:'10'
          }
        ], main: '20 FT' },
        
      ];

  return (
    <>
      <Stack mt={3} ml={3} direction="row" bg='#f4f5f4' m={2} p={1} >
  <Text color="black" fontSize='l' fontWeight="bold">Alotted/Ongoing</Text>
  <Spacer />
  {/* <Text color="black" fontSize='l' fontWeight="bold" textAlign="right" pr={'8'}>20ft/40ft</Text> */}
</Stack>

      <div className="row">
        <div className="posters">
          {data.map((item) => (
            <Grid
              key={item.id}
              templateAreas={`"header header" "nav main" "nav footer"`}
              gridTemplateRows={'50px 1fr 40px'}
              gridTemplateColumns={'250px 1fr'}
              h='220px'
              gap='0'
              color='blackAlpha.700'
              fontWeight='bold'
              m={2}
              border='1px'
              
              borderRadius='10px'
              borderColor='#F1F1F1'
              boxShadow={'md'}
            >
              <GridItem pl='2' pt='1' bg='white' borderTopRadius={10}   area={'header'}>
                <GridItem m='2' pl='2' bg='#f4f5f4' borderRadius={10} fontSize='xl'>{item.header}</GridItem>
                
              </GridItem>
             <GridItem key={item.id} pl='1' pt='1' bg='white' borderBottomStartRadius={10} area={'nav'}>
              {/* {vTypes.map((item) => (
                <GridItem m='2' pl='4' borderRadius={5} >{item}</GridItem>
              ))} */}
               <GridItem m='2' pl='4'  borderRadius={5} >
              <UnorderedList>
  <ListItem>National Transport : 50</ListItem>
  <ListItem>All Kerala Transport : 34</ListItem>
  <ListItem>Local Transport : 2</ListItem>
</UnorderedList>
</GridItem>
             {/* <GridItem m='2' pl='4' bg='#fef5da' borderRadius={5} > <span dangerouslySetInnerHTML={{__html: item.nav}} /></GridItem> */}
           
             </GridItem>
              <GridItem pl='2' pt={3} bg='white' area={'main'}>
                {item.main}
                
              </GridItem>
              <GridItem pl='0' pt='0' pb='3' pr='3' bg='white' borderBottomEndRadius={10} area={'footer'}>
                <WrapItem>
                  <Button bg='#f4f5f4' size='sm'>Cancel</Button>
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

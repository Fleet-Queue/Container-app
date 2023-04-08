
import {

    Button,
    Stack,
    Text,
    Grid,
    GridItem,
    WrapItem,
    Spacer,

} from '@chakra-ui/react';
import {

  ListItem,

  UnorderedList,
} from '@chakra-ui/react'

export const Queue = () => {

  const data = [
    { id: 1, header: 'KL-40-1234', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '20 FT' },
    { id: 2, header: 'KL-40-5678', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '40 FT' },
    { id: 3, header: 'KL-40-9012', nav: 'National Transport<br/>All Kerala Transport<br/>Local Transport', main: '20 FT' },
    
  ];

  const vTypes = ['National Transport', 'All Kerala Transport', 'Local Transport'];

    return (
        <>

<Stack mt={3} ml={3} direction="row" bg='#f4f5f4' m={3} p={1} >
  <Text color="black" fontSize='l' fontWeight="bold">In Queue</Text>
  <Spacer />
  {/* <Text color="black" fontSize='l' fontWeight="bold" textAlign="right" pr={'8'}>20ft/40ft</Text> */}
</Stack>



            <div className="row">
                <div className="queue">
                {data.map((item) => (
                    <Grid
                    key={item.id}
                    templateAreas={`"header header" "header2 header2" "nav main" "nav footer"`}
                    gridTemplateRows={'50px 55px 1fr 40px'}
                    gridTemplateColumns={'250px 1fr'}
                    h='220px'
                    gap='0'
                    color='blackAlpha.700'
                    fontWeight='bold'
                    m={2}
                    border='1px'
                    
                    borderRadius='10px'
                    borderColor='#F1F1F1'
                    boxShadow='0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
                  >
                    <GridItem pl='2' pt='1' bg='white' borderTopRadius={10}   area={'header'}>
                      <GridItem m='2' pl='2' bg='#f4f5f4' borderRadius={10} fontSize='xl'>
                        <Text  fontSize='xl'>  {item.header}</Text>
                      </GridItem>
                      
                    </GridItem>
                    <GridItem pl='2' pt='1' bg='white' borderTopRadius={10}   area={'header2'}>
                    <Text fontSize={'xs'} pl={3} pt={1} pr={1} pb={1} m='2' color={'#8A6E3B'}  bgColor={"#FFF4DA"} borderRadius={'4'}>If there is any further queries. Please contact the  forwarder , if any complaint contact admin</Text>
                      
                    </GridItem>

              <GridItem key={item.id} pl='1' pt='1' bg='white' borderBottomStartRadius={10} area={'nav'}>
               <GridItem m='2' pl='4'  borderRadius={5} >
              <UnorderedList>
  <ListItem>National Transport : 50</ListItem>
  <ListItem>All Kerala Transport : 34</ListItem>
  <ListItem>Local Transport : 2</ListItem>
</UnorderedList>
</GridItem>
             {/* <GridItem m='2' pl='4' bg='#fef5da' borderRadius={5} > <span dangerouslySetInnerHTML={{__html: item.nav}} /></GridItem> */}
           
             </GridItem>

             <GridItem display='flex'  justifyContent='flex-end' pl='2' mr={'7'} pt={3} bg='white' area={'main'}>
                {item.main}
                
              </GridItem>
              <GridItem display='flex'   justifyContent='flex-end' mr={'4'} bg='white' borderBottomEndRadius={10} area={'footer'}>
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
    .queue {
      display: block;
    }

   
    @media (min-width: 680px) {
        .queue {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: 1128px) {
        .queue {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }
  `}
</style>


        </>
    );
}



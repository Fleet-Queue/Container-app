
import {

    Button,
    Stack,
    Text,
    Grid,
    GridItem,
    WrapItem,
    Spacer,

} from '@chakra-ui/react';


export const Queue = () => {

    const data = [
        { id: 1, header: 'KL-40-1234', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '20 FT' },
        { id: 2, header: 'KL-40-5678', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '40 FT' },
        { id: 3, header: 'KL-40-9012', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '20 FT' },
        { id: 4, header: 'KL-40-1234', nav: 'NATIONAL TRANSPORT<br/>ALL KERALA TRANSPORT<br/>LOCAL TRANSPORT', main: '20 FT' },
      ];

    return (
        <>

<Stack mt={3} ml={3} direction="row" bg='#f4f5f4' m={3} p={1} >
  <Text color="black" fontSize='l' fontWeight="bold">In Queue</Text>
  <Spacer />
  <Text color="black" fontSize='l' fontWeight="bold" textAlign="right" pr={'8'}>20ft/40ft</Text>
</Stack>



            <div className="row">
                <div className="queue">
                {data.map((item) => (
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
                        borderColor='#F1F1F1'
                        boxShadow={'md'}
                        
                    >

                        <GridItem pl='2' pt='1' bg='white' borderTopRadius={10} fontSize='xl' area={'header'}>
                        <GridItem m='2' pl='2' bg='#f4f5f4' borderRadius={10} fontSize='xl'>{item.header}</GridItem>
                        </GridItem>

                     <GridItem key={item.id} pl='1' pt='1' bg='white' borderBottomStartRadius={10} area={'nav'}>
             <GridItem m='2' pl='4' bg='#fef5da' borderRadius={5} > <span dangerouslySetInnerHTML={{__html: item.nav}} /></GridItem>
           
             </GridItem>
              <GridItem pl='2' pt={3} bg='white' area={'main'}>
                {item.main}
                
              </GridItem>
              <GridItem pl='0' pt='1' pr='2' bg='white' borderBottomEndRadius={10} area={'footer'}>
                <WrapItem>
                  <Button bg={'#ecf2f6'} size='sm'>Cancel</Button>
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



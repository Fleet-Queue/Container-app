
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

<Stack mt={3} ml={3} direction="row" >
  <Text color="black" fontSize='xl' fontWeight="bold">In Queue</Text>
  <Spacer />
  <Text color="black" fontSize='xl' fontWeight="bold" textAlign="right" pr={'8'}>20ft/40ft</Text>
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
                        borderColor='#D4E5F6'
                        backgroundColor='#D4E5F6'
                        boxShadow={'md'}
                        
                    >

                        <GridItem pl='8' pt='1' bg='#D4E5F6' borderTopRadius={10} fontSize='xl' area={'header'}>
                        {item.header}
                        </GridItem>
                        <GridItem  pl='8' pt='4' bg='#D4E5F6' borderBottomStartRadius={10} area={'nav'}>
            <span dangerouslySetInnerHTML={{__html: item.nav}} />
             </GridItem>
                        <GridItem justifySelf={'end'} pt='4' pr='4' bg='#D4E5F6' area={'main'}>
                        {item.main}
                        </GridItem>
                        <GridItem justifySelf={'end'} pt='1' pr='2' bg='#D4E5F6' borderBottomEndRadius={10} area={'footer'}>
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



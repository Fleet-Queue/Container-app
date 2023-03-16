
import {
    Box,
    Input,
    Button,
    InputGroup,
    InputRightElement,

  
  } from '@chakra-ui/react';
  
  import {Search2Icon} from '@chakra-ui/icons';

  
  export  const Searchbar = () => {
     
  
    return (
      <>

  
  
  <Box display="flex" pb={2} mt={2} m={2}>
  <InputGroup>
    <Input placeholder="Search by vehicle no" mr={2}/>
   
      <InputRightElement width='4.5rem'>
          <Button h='1.75rem' >
          {<Search2Icon />}
          </Button>
        </InputRightElement>
    </InputGroup>
  </Box>
  

  
      </>
    );
  }
  
  
  
  
    
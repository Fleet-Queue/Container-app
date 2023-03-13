
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  InputRightAddon,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';

import {Search2Icon} from '@chakra-ui/icons';
import {Navbar} from '../components/transporter/navbar';

  

export  const Transporter = () => {
   

  return (
    <>
    
      
<Navbar/>


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

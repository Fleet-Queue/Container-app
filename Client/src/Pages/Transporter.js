
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
  InputRightElement,
  Text,
  Grid,
  GridItem,
  WrapItem,

} from '@chakra-ui/react';

import {Search2Icon} from '@chakra-ui/icons';
import {Navbar} from '../components/transporter/navbar';
import {Alotted} from '../components/transporter/alotted';
import {Queue} from '../components/transporter/queue';
import {Searchbar} from '../components/transporter/searchbar';

  

export  const Transporter = () => {
   

  return (
    <>
    
{/* Navbar  */}

<Navbar/>

{/* Searchbar */}

<Searchbar/>

{/* Alotted */}

<Alotted/>

{/* In Queue */}

<Queue/>


    </>
  );
}




  
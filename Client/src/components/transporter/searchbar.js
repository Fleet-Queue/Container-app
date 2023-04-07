import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { FaFilter } from 'react-icons/fa';

export const Searchbar = () => {
  return (
    <>
      <Box display="flex" pb={2} mt={2} pt={2} m={2}>
        <InputGroup>
          <Input placeholder="Search by vehicle no"  />
          <InputRightElement>
          <Button h="1.75rem" mr={1}>
          <Search2Icon />
            </Button>
            <Select icon={<FaFilter />} h="1.75rem" mr={14}/>
            
            
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

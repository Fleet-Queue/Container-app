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
          <Input placeholder="Search by vehicle no" />
          <InputRightElement>
          <Select
              icon={<FaFilter />}
              border={'none'}
              h="1.75rem" mr={2}
              p={3}
              style={{ textAlign: 'left', paddingLeft: '0.6rem' }}
            >
              <option>20 Ft</option>
              <option>40 Ft</option>
            </Select>
            <Button    h="1.75rem"
             
              mr={14}
            
             >
              <Search2Icon />
            </Button>
            


          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

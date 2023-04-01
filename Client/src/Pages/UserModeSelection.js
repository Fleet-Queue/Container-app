import React from 'react';
import { Box, Image, Heading, Flex, useDisclosure, Button, Grid, GridItem ,Text } from '@chakra-ui/react';
import forwarder from '../icons/forwarder-100x100.png';
import transporter from '../icons/truck-100x100.png';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


  
import { useNavigate } from 'react-router-dom';



const UserModeSelection = (details) => {
  console.log(details);

const onClose = () => {
  details.close();
}
  return (


  
    <Modal isOpen={details.open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>          

        
<Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' bg='tomato'>
    <Text>Text in Grid Item 1</Text>
  </GridItem>
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip'>
    <Text>Text in Grid Item 2</Text>
  </GridItem>
</Grid>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

  );
};

export default UserModeSelection;

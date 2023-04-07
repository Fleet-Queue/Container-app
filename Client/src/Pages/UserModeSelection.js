import { Box, Image, Flex, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import forwarder from '../icons/forwarder-100x100.png';
import transporter from '../icons/truck-100x100.png';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';


const UserModeSelection = (details) => {
  console.log(details);

  const onClose = () => {
    details.close();
  };

  return (
    <>
    <Modal isOpen={details.open} onClose={onClose} size="xs" >
      <ModalOverlay />
      <ModalContent minHeight="300px" maxHeight="600px">
        <ModalHeader>Select User Mode</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={2} display="flex" alignItems="center">
              <Flex align="center" justify="center" direction="column">
                <Text fontSize="xl" fontWeight="bold">
                  Transporter
                </Text>
                <Box w="80px" h="80px" bg="gray.100" borderRadius="full" mt={2}>
                  <Image src={transporter} alt="Transporter" w="60px" h="60px" mx="auto" my={3} />
                </Box>
              </Flex>
            </GridItem>
            <GridItem colStart={4} colEnd={6} display="flex" alignItems="center">
            <Flex align="center" justify="center" direction="column">
                <Text fontSize="xl" fontWeight="bold">
                  Forwarder
                </Text>
                <Box w="80px" h="80px" bg="gray.100" borderRadius="full" mt={2}>
                  <Image src={forwarder} alt="Forwarder" w="60px" h="60px" mx="auto" my={3} />
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    </>
  );
};

export default UserModeSelection;

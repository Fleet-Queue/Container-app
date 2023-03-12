import React from 'react';
import { Box, Image, Heading, Flex } from '@chakra-ui/react';
import forwarder from '../icons/forwarder-100x100.png';
import transporter from '../icons/truck-100x100.png';

const Card = ({ logo, name }) => {
  return (
    <Flex
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{
        boxShadow: 'xl',
        transition: 'all 0.2s ease-out',
      }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="white"
      color="gray.800"
      pt={{ base: 4, md: 8 }}
    >
      <Image src={logo} boxSize="70px" mt={8} />
      <Box p={4} textAlign="center">
        <Heading as="h2" size="md" mt={4} mb={2}>
          {name}
        </Heading>
      </Box>
    </Flex>
  );
};

const UserModeSelection = () => {
  return (
    <Box maxW="1200px" m="0 auto" mx="auto">
      <Heading as="h1" size="2xl" textAlign="center" mt={16} mb={8} color="gray.800">
        Select User Mode
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box flexBasis={['100%', '45%']} mb={8} className="card-wrapper">
          <Card logo={forwarder} name="Forwarder" />
        </Box>
        <Box flexBasis={['100%', '45%']} mb={8} className="card-wrapper">
          <Card logo={transporter} name="Transporter" />
        </Box>
      </Box>
      <style>
        {`
          @media (max-width: 480px) {
            .card-wrapper {
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default UserModeSelection;

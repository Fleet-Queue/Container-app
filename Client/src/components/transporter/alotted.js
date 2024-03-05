import React from 'react';
import { Text, Flex, Wrap, WrapItem, Box } from '@chakra-ui/react';
import { VehicleBox } from '../miscellaneous/vehicleBox';

export const Alotted = () => {
  const data = [
    { id: 1, vehicleNo: "KL-40-1234", count: [50, 20, 1], feet: 20 },
    { id: 2, vehicleNo: "KL-40-5678", count: [30, 30, 0], feet: 40 },
    { id: 3, vehicleNo: "KL-40-9012", count: [20, 2, 23], feet: 20 },
    { id: 4, vehicleNo: "KL-40-1434", count: [50, 20, 1], feet: 20 },
    { id: 5, vehicleNo: "KL-40-5638", count: [30, 30, 0], feet: 40 },
    { id: 6, vehicleNo: "KL-40-9022", count: [20, 2, 23], feet: 20 },
    { id: 7, vehicleNo: "KL-40-1264", count: [50, 20, 1], feet: 20 },
    { id: 8, vehicleNo: "KL-40-5378", count: [30, 30, 0], feet: 40 },
    { id: 9, vehicleNo: "KL-40-9212", count: [20, 2, 23], feet: 20 },
  ];

  const vTypes = ['National Transport', 'All Kerala Transport', 'Local Transport'];

  return (
    <>
      <Flex mt={3} ml={3} alignItems="center">
        <Text color="black" fontSize="xl" fontWeight="bold">Alotted/Ongoing</Text>
      </Flex>

      <Box overflowX="auto"  sx={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollbarWidth: 'none', // For Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // For Chrome, Safari, and Opera
          },
        }}>
        <Flex>
          {data.map((item) => (
            <Box key={item.id} minWidth="300px" flexShrink={0} mr={4}>
              <VehicleBox data={item} vTypes={vTypes} />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

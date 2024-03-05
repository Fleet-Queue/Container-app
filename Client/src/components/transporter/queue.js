import {
  Stack,
  Text,
  Box,
  GridItem,
  SimpleGrid ,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { VehicleBox } from "../miscellaneous/vehicleBox";
export const Queue = () => {
  const data = [
    { id: 1, vehicleNo: "KL-40-1234", count: [50, 20, 1], feet: 20 },
    { id: 2, vehicleNo: "KL-40-5678", count: [30, 30, 0], feet: 40 },
    { id: 3, vehicleNo: "KL-40-9012", count: [20, 2, 23], feet: 20 },
  ];

  const vTypes = [
    "National Transport",
    "All Kerala Transport",
    "Local Transport",
  ];

  return (
    <>
         <Flex mt={3} ml={3} alignItems="center">
        <Text color="black" fontSize="xl" fontWeight="bold">In Queue</Text>
      </Flex>


      <Box sx={{paddingX: 4,}}>
        <div className="queue">
          {data.map((item) => (
            <VehicleBox data={item} vTypes={vTypes} />
          ))}
        </div>
      </Box>

      <style>
        {`
    .queue {
      display: block;
    }

   
   
  `}
      </style>
    </>
  );
};

// @media (min-width: 680px) {
//     .queue {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media (min-width: 1128px) {
//     .queue {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }

import {
  Button,
  Stack,
  Text,
  Grid,
  GridItem,
  WrapItem,
  Spacer,
  Box,
  VStack,
} from "@chakra-ui/react";
import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";

export const VehicleBox = ({ data, vTypes, ...props }) => {
  return (
    <>
      <Box
        border="1px"
        borderColor="#F1F1F1"
        borderRadius="10px"
        color="blackAlpha.800"
        fontWeight="bold"
        m={2}
        width="100%"
        boxShadow={"md"}
      >
        <Grid
          p={2}
          h="200px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={5} p={2} bg="#f4f5f4"  borderRadius="10px">
            <Text as="b" fontSize="xl"  fontFamily="arial">
              {data.vehicleNo}
            </Text>
          </GridItem>

          <GridItem colSpan={3} pl={3} py={2}>
            <Box>
              <UnorderedList>
                {vTypes.map((res, index) => (
                  <ListItem fontWeight="bold" key={index}>
                    {res}: {data.count[index]}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </GridItem>

          <GridItem colSpan={2} p={2}>
            <Stack align="flex-end">
              <Text as="b" fontSize="xl">
                {" "}
                {data.feet} FT
              </Text>
            </Stack>
          </GridItem>

          <GridItem colSpan={5} p={2}>
            <Stack align="flex-end">
              <Button>Cancel</Button>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

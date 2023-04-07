import React from 'react'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Text

  } from '@chakra-ui/react';
  
  import {SideDrawer} from '../miscellaneous/sideDrawer';
  
  
  
export const Navbar = () => {
  return (
    <>
    
    <Box bg={useColorModeValue('black.0', 'black.100')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <SideDrawer/>
      
      <HStack spacing={8} alignItems={'center'}>
  <Box>
    <Text fontSize='lg' color={'white'}>
    Transporter
    </Text>
   </Box>
</HStack>

        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={
                  'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      
    </Box>

    
  </>
  )
}


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
    Text,
    Heading 

  } from '@chakra-ui/react';
  
  import {SideDrawer} from '../miscellaneous/sideDrawer';
  
  
  
export const Navbar = () => {
  return (
    <>
    
    <Box 
   // bg={useColorModeValue('black.0', 'black.100')} 
   bg={'#0052CC'}
    px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <SideDrawer/>
      
      <HStack spacing={8} alignItems={'center'}>
  <Box>
    <Heading  fontSize='lg' color={'white'}>
    Transporter
    </Heading >
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
                  'https://api-private.atlassian.com/users/8b3597e8a7d1d8f2ed7f58bcab1946b8/avatar'
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


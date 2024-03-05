import React from 'react'
import { Button,  IconButton ,Drawer, useDisclosure, DrawerContent,DrawerBody,Box,VStack,StackDivider,Icon,HStack,Text,
    DrawerFooter,
    Divider,
    DrawerHeader,
    DrawerOverlay,
    DrawerCloseButton,Input, } from "@chakra-ui/react";
    import { HamburgerIcon } from '@chakra-ui/icons';
    import { FiUser, FiInfo, FiSettings } from "react-icons/fi";
export function SideDrawer(){
 
   
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        return (
          <>
            <IconButton
            size={'md'}
            icon={ <HamburgerIcon />}
            aria-label={'Open Menu'}
            ref={btnRef}
            onClick={onOpen}
          background='#0052CC'
          color='#ffff'
         _hover={{ color: 'gray.800' }} 
          />
            
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Transporter Dashboard</DrawerHeader>
                   <DrawerBody >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}

        align="stretch"
      >
        <HStack spacing={2} cursor="pointer">
          <Icon as={FiUser} boxSize={6}  />
          <Text fontSize="md">Profile</Text>
        </HStack>
        <HStack spacing={2} cursor="pointer">
          <Icon as={FiInfo} boxSize={6} />
          <Text fontSize="md">About</Text>
        </HStack>
        <HStack spacing={2} cursor="pointer">
          <Icon as={FiSettings} boxSize={6} />
          <Text fontSize="md">Settings</Text>
        </HStack>
      </VStack>
    </DrawerBody>



  
              </DrawerContent>
            </Drawer>
          </>
        )
      
  
}


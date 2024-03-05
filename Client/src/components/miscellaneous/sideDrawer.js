import React from 'react'
import { Button,  IconButton ,Drawer, useDisclosure, DrawerContent,DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerCloseButton,Input, } from "@chakra-ui/react";
    import { HamburgerIcon } from '@chakra-ui/icons';
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
          background='white'
          color='#172B4D'
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
      
                <DrawerBody>
                  <Input placeholder='Type here...' />
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      
  
}


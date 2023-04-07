import {
    Box,
    Button,
    Checkbox,
    Container,
    
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
     InputGroup, InputRightElement,
     useToast
  } from '@chakra-ui/react'
  
  import { useNavigate } from 'react-router-dom';
  import UserModeSelection from '../UserModeSelection';

  import { Logo } from './Logo'
  import React, { useState } from 'react'
  // import { OAuthButtonGroup } from './OAuthButtonGroup'
 
  export const Login = () =>{ 
    const toast = useToast()
    const navigate = useNavigate();
    const [Mobno, setMobno] = useState('')
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState();
    const [Show, setShow] = useState(false);
    const [loading,setLoading]=useState(false);
    const [pOpen,setPOpen]=useState(true);
    const [pop,setPop]=useState(false); 
  

  

    const handleClick = () => setShow(!Show);

    const submitHandler =async (e) => {
      
      setLoading(true)
      if(!Mobno || !password){
        toast({
          title: "Fill all the fields! ",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
          setLoading(false)
          return
      }else{
        // navigate("/user-mode")
       console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
       setPOpen(true)
     console.log(pOpen)
       const onClose=()=>{
          
           setLoading(false)
           setPop()
        }
        setPop(()=> (
        <UserModeSelection
          open = {pOpen}
          close={onClose}
        />
        ))
      }
    }

    return(
    <Container
      maxW="lg"
      py={{
        base: '32',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >

      {pop}
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: 'xl',
                md: 'sm',
              }}
            >
              Login
            </Heading>
            <HStack spacing="1" justify="center">
              {/* <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button> */}
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: 'bg-surface',
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="mobile">Mobile No:</FormLabel>
                <Input id="mobile" type="text"  onChange={(e)=>setMobno(e.target.value)}
            value={Mobno} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                
                <InputGroup>
<Input
type={Show?"text":"password"}
placeholder='Enter Your Password'
value={password}
onChange={(e)=>setPassword(e.target.value)}/>

<InputRightElement width="4.5rem">
<Button h="1.75rem" size="sm" onClick={handleClick}>
{Show ? "Hide" : "Show"}
</Button>
</InputRightElement>


</InputGroup>
              </FormControl>
              {/* <PasswordField /> */}
              {/* <FormControl>
                <FormLabel htmlFor="otp">Otp:</FormLabel>
                <Input id="otp" type="text"  onChange={(e)=>setOtp(e.target.value)}
            value={otp} />
              </FormControl> */}
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
           
            {/* Google Twitter Authentification code */}

            <Stack spacing="6">
              <Button colorScheme='blue' onClick={submitHandler} isLoading={loading}>Sign in</Button>
              {/* <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup /> */}
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Container>
  )}
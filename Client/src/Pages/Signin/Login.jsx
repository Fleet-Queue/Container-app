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

  } from '@chakra-ui/react'
  import { Logo } from './Logo'
  // import { OAuthButtonGroup } from './OAuthButtonGroup'
  import { PasswordField } from './PasswordField'
  
  export const Login = () => (
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
           
            {/* Google Twitter Authentification code */}

            <Stack spacing="6">
              <Button colorScheme='blue'>Sign in</Button>
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
  )
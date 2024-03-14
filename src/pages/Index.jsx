import React, { useState } from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, Container, Grid, GridItem, Icon, Link } from "@chakra-ui/react";
import { FaShoppingCart, FaLock, FaDatabase, FaBolt } from "react-icons/fa";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <Box>
      <Box bg="blue.500" py={4}>
        <Container maxW="container.lg">
          <HStack justify="space-between">
            <Heading as="h1" color="white" size="xl">
              Secure Your Digital World with MyOCSP
            </Heading>
            <Button leftIcon={<FaShoppingCart />} colorScheme="white" variant="outline">
              Cart ({cartItems})
            </Button>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="2xl" mb={4}>
              Secure and Fast OCSP Services
            </Heading>
            <Text fontSize="xl">MyOCSP provides on-demand OCSP services for secure certificate validation. Our API-driven platform ensures fast response times and reliable certificate status checks.</Text>
          </Box>

          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <VStack align="center">
                <Icon as={FaLock} boxSize={12} color="blue.500" />
                <Heading as="h3" size="lg">
                  Secure
                </Heading>
                <Text>Robust security measures to protect your data and ensure the integrity of certificate status responses.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="center">
                <Icon as={FaDatabase} boxSize={12} color="blue.500" />
                <Heading as="h3" size="lg">
                  Reliable
                </Heading>
                <Text>Highly available infrastructure with MySQL as the primary database for storing certificate data.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="center">
                <Icon as={FaBolt} boxSize={12} color="blue.500" />
                <Heading as="h3" size="lg">
                  Fast
                </Heading>
                <Text>Lightning-fast response times with Redis caching to deliver OCSP responses in milliseconds.</Text>
              </VStack>
            </GridItem>
          </Grid>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Easy Integration
            </Heading>
            <Text fontSize="lg" mb={8}>
              Integrate MyOCSP into your application with our well-documented OpenAPI. Simplify certificate validation and enhance security with just a few API calls.
            </Text>
            <Box textAlign="center">
              <Link href="/api-docs" isExternal>
                <Button colorScheme="blue" size="lg">
                  Explore API Documentation
                </Button>
              </Link>
            </Box>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Select Your Plan
            </Heading>
            <Text fontSize="lg" mb={8}>
              <strong>MyOCSP</strong> streamlines digital certificate validation, offering real-time status checks without the hassle of managing Certificate Revocation Lists (CRLs). Our service integrates effortlessly with your existing security setup, ensuring rapid deployment and immediate efficiency gains.
            </Text>
            <Text fontSize="lg" mb={8}>
              Choose the plan that best suits your needs and start securing your digital world with MyOCSP today.
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Basic
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $0
                  </Text>
                  <Text>Unlimited requests</Text>
                  <Text>Shared instance</Text>
                  <Button colorScheme="blue" size="lg" mt={4} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Pro
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $15
                  </Text>
                  <Text>/month</Text>
                  <Text>Dedicated instance</Text>
                  <Button colorScheme="blue" size="lg" mt={4} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Enterprise
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $20
                  </Text>
                  <Text>/month per instance</Text>
                  <Text>Unlimited instances</Text>
                  <Text>Load balancing</Text>
                  <Button colorScheme="blue" size="lg" mt={4}>
                    Contact Us
                  </Button>
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Basic
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $0
                  </Text>
                  <Text>Unlimited requests</Text>
                  <Text>Shared instance</Text>
                  <Button colorScheme="blue" size="lg" mt={4} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Pro
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $15
                  </Text>
                  <Text>/month</Text>
                  <Text>Dedicated instance</Text>
                  <Button colorScheme="blue" size="lg" mt={4} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Enterprise
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $20
                  </Text>
                  <Text>/month per instance</Text>
                  <Text>Unlimited instances</Text>
                  <Text>Load balancing</Text>
                  <Button colorScheme="blue" size="lg" mt={4}>
                    Contact Us
                  </Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack align="center" border="1px" borderColor="gray.200" borderRadius="md" p={6}>
                  <Heading as="h3" size="lg">
                    Experimental
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold">
                    $0
                  </Text>
                  <Text>/month</Text>
                  <Text>Shared instance</Text>
                  <Text>OCSPv2 support</Text>
                  <Text>PQC support</Text>
                  <Button colorScheme="blue" size="lg" mt={4} onClick={addToCart}>
                    Add to Cart
                  </Button>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </VStack>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            <GridItem>
              <Heading as="h2" size="xl" mb={4}>
                About MyOCSP
              </Heading>
              <Text fontSize="lg">MyOCSP is a leading provider of on-demand OCSP services. We are committed to delivering secure, reliable, and fast certificate status validation to our customers. Our team of experts ensures the highest level of security and performance.</Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBvbmxpbmUlMjBwYXltZW50fGVufDB8fHx8MTcxMDM3MjIyNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Secure Payment" />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;

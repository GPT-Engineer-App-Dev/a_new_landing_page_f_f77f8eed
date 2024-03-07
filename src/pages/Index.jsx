import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  const heroImage = useBreakpointValue({
    base: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZXJvJTIwaW1hZ2V8ZW58MHx8fHwxNzA5ODIxMjQzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    md: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwaGVybyUyMGltYWdlfGVufDB8fHx8MTcwOTgyMTI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  });

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              Webbografi
            </Heading>
            <Stack as="nav" direction="row" spacing={4}>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Portfolio</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="flex-start" spacing={5}>
              <Heading as="h2" size="2xl">
                Crafting Digital Experiences
              </Heading>
              <Text fontSize="lg" color="gray.700">
                High-quality web solutions tailored for your business.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </VStack>
            <Image src={heroImage} alt="Hero Image" borderRadius="lg" objectFit="cover" boxSize={{ base: "100%", md: "50%" }} />
          </Flex>
        </Container>
      </Box>

      {/* Featured Content */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Stack spacing={20}>
            <Box>
              <Heading as="h3" size="xl">
                Our Services
              </Heading>
              <Text color="gray.600">Discover our range of services designed to help you succeed online.</Text>
              {/* TODO: Add Service Cards Here */}
            </Box>
            <Box>
              <Heading as="h3" size="xl">
                Latest Projects
              </Heading>
              <Text color="gray.600">Take a look at some of our recent work that we are particularly proud of.</Text>
              {/* TODO: Add Project Cards Here */}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Webbografi. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" isExternal aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="#" isExternal aria-label="Instagram">
                <FaInstagram />
              </Link>
              <Link href="#" isExternal aria-label="Twitter">
                <FaTwitter />
              </Link>
              <Link href="#" isExternal aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;

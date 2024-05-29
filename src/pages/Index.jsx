import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" centerContent>
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl">Welcome to Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">
          Track your workouts, monitor your progress, and achieve your fitness goals with our easy-to-use fitness tracking app.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
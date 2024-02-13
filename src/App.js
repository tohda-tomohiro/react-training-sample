import Counter from './Counter';
import { Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box mx="auto" my="5" px="5" maxWidth="container.md">
      <Heading as="h2" size="xl">
        Counter App
      </Heading>
      <Counter />
    </Box>
  );
}

export default App;

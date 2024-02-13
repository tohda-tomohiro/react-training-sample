import { useState } from 'react';
import { Box, Button, Text, useToast } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const toast = useToast();

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      border="1px solid"
      borderColor="gray.400"
      display="inline-block"
      p="5"
      mt="5"
      borderRadius="md"
    >
      <Text size="md" fontWeight="bold" mb="3">
        This is Counter Component.
      </Text>
      <Box display="flex" alignItems="center">
        <Button onClick={increment} size="sm" colorScheme="teal">
          +
        </Button>
        <Box ml="3">{count}</Box>
      </Box>
    </Box>
  );
};

export default Counter;

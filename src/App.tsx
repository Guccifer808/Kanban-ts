import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        font-Weight='bold'
        textAlign='center'
        mt={4}
        bgGradient='linear(to-l, #4b6cb7, #182848)'
        bgClip='text'
      >
        Kanban Board
      </Heading>
      <Container maxWidth='container.lg' px={4} py={10}></Container>
    </>
  );
}

export default App;

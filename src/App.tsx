import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import GithubIconButton from './components/GithubIconButton';

import { ColumnType } from './utils/enums';
function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight='bold'
        textAlign='center'
        mt={4}
        bgGradient='linear(to-l, #4b6cb7, #182848)'
        bgClip='text'
      >
        Kanban Board
      </Heading>{' '}
      <GithubIconButton position='absolute' top={0} left={2} />
      <DarkModeIconButton position='absolute' top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth='container.lg' px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;

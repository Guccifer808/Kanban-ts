import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColumnType } from '../utils/enums';

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: 'gray',
  'In Progress': 'blue',
  Blocked: 'red',
  Completed: 'green',
};

const Column = ({ column }: { column: ColumnType }) => {
  return (
    <Box>
      <Heading>
        <Badge
          px={2}
          py={1}
          rounded='lg'
          colorScheme={ColumnColorScheme[column]}
        ></Badge>
      </Heading>
      <IconButton
        size='xs'
        w='full'
        color={useColorModeValue('gray.500', 'gray.400')}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{ bgColor: useColorModeValue('gray.100', 'gray.700') }}
        variant='solid'
        colorScheme='black'
        aria-label='add-task'
        py={2}
      ></IconButton>
    </Box>
  );
};

export default Column;

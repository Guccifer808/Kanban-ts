import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Textarea } from '@chakra-ui/react';
import { TaskModel } from '~/utils/models';

type TaskProps = {
  index: number;
  task: TaskModel;
};

const Task = ({ index, task }) => {
  return (
    <Box
      as='div'
      role='group'
      position='relative'
      rounded='lg'
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      bgColor={task.color}
      boxShadow='lg'
      cursor='grab'
    >
      <IconButton
        icon={<DeleteIcon />}
        position='absolute'
        top={0}
        right={0}
        zIndex={100}
        aria-label='delete-task'
        size='md'
        color='gray.600'
        colorScheme='solid'
        _groupHover={{ opacity: 1 }}
      />
      <Textarea
        value={task.title}
        fontWeight='semibold'
        minH={70}
        maxH={200}
        p={0}
        resize='none'
        cursor='inherit'
        border='none'
        focusBorderColor='none'
        color='gray.700'
      ></Textarea>
    </Box>
  );
};

export default Task;

import { BsGithub } from 'react-icons/bs';
import { IconButton } from '@chakra-ui/react';

function GithubIconButton({
  ...rest
}: React.ComponentPropsWithoutRef<typeof IconButton>) {
  const handleRedirect = () => {
    window.open('https://github.com/Guccifer808/Kanban-ts', '_blank');
  };
  return (
    <IconButton
      icon={<BsGithub />}
      aria-label={'github-repository'}
      onClick={handleRedirect}
      {...rest}
    />
  );
}

export default GithubIconButton;

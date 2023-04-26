import { LoginButton, SearchButton } from '@/components/atoms/Buttons';
import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const NavControlBar = (props: Props) => {
  return (
    <Box display='flex' gap='4' px='4'>
      <SearchButton />
      <LoginButton onClick={() => {}} />
    </Box>
  );
};

export default NavControlBar;

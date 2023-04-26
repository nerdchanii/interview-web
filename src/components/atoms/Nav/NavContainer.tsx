import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type Props = BoxProps;

const NavContainer = ({ children, ...props }: Props) => {
  return (
    <Box as='nav' display={'flex'} gap='2' flexDir='row' {...props}>
      {children}
    </Box>
  );
};

export default NavContainer;

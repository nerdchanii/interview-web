import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type Props = BoxProps;

const ControllBarContainer = ({ children, ...props }: Props) => {
  return (
    <Box display='flex' gap='4' px='4'>
      {children}
    </Box>
  );
};

export default ControllBarContainer;

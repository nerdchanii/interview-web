import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type Props = BoxProps;

const Container = ({ children, ...props }: Props) => {
  return (
    <Box display={'flex'} alignItems={'center'} gap='4' px='4'>
      {children}
    </Box>
  );
};

export default Container;
30;

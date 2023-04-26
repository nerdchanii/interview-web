import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

type Props = BoxProps;

export const Container = ({ children, ...props }: Props) => {
  return (
    <Box m='auto' boxShadow={'md'} px='4' py='2'>
      <Box
        {...props}
        as='header'
        display={'flex'}
        flexDir='row'
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'90vw'}
        m='auto'
      >
        {children}
      </Box>
    </Box>
  );
};

export default Container;

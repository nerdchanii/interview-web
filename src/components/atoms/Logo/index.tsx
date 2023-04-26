import { Link } from '@chakra-ui/next-js';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const Logo = ({ path = '/' }: { path?: string }) => {
  return (
    <Heading
      as='h1'
      color={'blue.600'}
      fontSize={'2xl'}
      lineHeight={'7'}
      padding='2'
      display={'inline-block'}
    >
      <Link href={path} _hover={{ borderBottom: 'None' }}>
        DANDAN
      </Link>
    </Heading>
  );
};

export default Logo;

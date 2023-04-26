import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '@/components/molecules/NavBar';
import Container from './Container';
import NavControlBar from '@/components/molecules/ControlBar';

type Props = {};

const GNB = (props: Props) => {
  return (
    <Container>
      <NavBar />
      <NavControlBar />
    </Container>
  );
};

export default GNB;

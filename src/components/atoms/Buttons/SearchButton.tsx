import React from 'react';
import Button from './Button';
import { SearchIcon } from '@chakra-ui/icons';
import { ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps;

const SearchButton = (props: Props) => {
  return (
    <Button
      {...props}
      rounded={'full'}
      color={'black'}
      background={'whiteAlpha.600'}
      size='md'
      padding='1'
    >
      <SearchIcon fontSize={'2xl'} />
    </Button>
  );
};

export default SearchButton;

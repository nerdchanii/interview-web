import React from 'react';
import { ButtonProps, Button as CharkaButton } from '@chakra-ui/react';
type Props = ButtonProps;

const Button = ({ children, ...props }: Props) => {
  return <CharkaButton {...props}>{children}</CharkaButton>;
};

export default Button;

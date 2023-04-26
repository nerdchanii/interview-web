import React from 'react';
import Button from './Button';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoginButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick} size='md'>
      로그인
    </Button>
  );
};

export default LoginButton;

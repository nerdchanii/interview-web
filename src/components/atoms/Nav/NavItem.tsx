import { Link, LinkProps } from '@chakra-ui/next-js';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

type Props = LinkProps;

const NavItem = ({ children, href, ...props }: Props) => {
  const router = useRouter();

  const active = router.pathname === href;

  return (
    <Link
      href={href}
      fontSize={'lg'}
      lineHeight={'7'}
      p='2'
      fontWeight={'bold'}
      {...props}
      _hover={{
        textDecoration: 'none',
        color: 'gray.600',
      }}
      borderBottom={active ? '2px solid' : '2px solid'}
      borderColor={active ? 'blue.500' : 'gray.100'}
    >
      {children}
    </Link>
  );
};

export default NavItem;

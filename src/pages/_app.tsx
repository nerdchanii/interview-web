import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GNB from '@/components/organisms/GNB';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <GNB />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

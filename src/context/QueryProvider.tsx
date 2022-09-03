import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type Props = {
  children: ReactNode;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

export function QueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

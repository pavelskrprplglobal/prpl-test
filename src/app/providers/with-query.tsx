import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const withQuery = (component: () => React.ReactNode) => () => (
  <QueryClientProvider client={queryClient} contextSharing>
    {component()}
  </QueryClientProvider>
);

export default withQuery;

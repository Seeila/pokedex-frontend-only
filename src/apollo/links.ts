import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: `${import.meta.env.VITE_API_KEY}`,
    cache: new InMemoryCache(),
  });
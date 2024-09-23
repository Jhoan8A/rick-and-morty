import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  //uri: 'https://rickandmortyapi.com/graphql', // change your endpoint de GraphQL
  uri: 'http://localhost:4000/graphql', // change your endpoint de GraphQL
  cache: new InMemoryCache(),
});


export { client };
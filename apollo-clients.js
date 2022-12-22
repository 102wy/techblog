import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(), //graph ql 에서 캐시 관리를 해줌
});

export default client;

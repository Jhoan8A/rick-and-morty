import { gql } from '@apollo/client';
import  {client}  from '../services/ApolloProvider';

/*const GET_CHARACTERS = gql`
 query {
  characters(page:1 , filter: { }) {
    info {
      count
    }
    results {
       id
      name
      species
      image
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;*/

const GET_CHARACTERS = gql`
query {
  characters {
    name
    status
    species
    gender
    origin
    image
    id
  }

}
`;

 


export const fetchCharactersGraphQL = async () => {
  try {
    const { data } = await client.query({ query: GET_CHARACTERS });
    return data;
  } catch (error) {
    console.error('Error fetching characters from GraphQL:', error);
    throw error;
  }
};

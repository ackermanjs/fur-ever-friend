import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      animal
      savedAnimal {
        species
        breed
        name
        age
        sex
        comments
      }
    }
  }
`;

export const QUERY_ANIMAL = gql`
  query getAnimals {
    species
    breed
    name
    age
    sex
    comments
    }
  }
`;

export const QUERY_SINGLE_Animal = gql`
  query getSingleAnimal($Animal) {
    species
    breed
    name
    age
    sex
    comments
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedAnimal {
        _id
      }
    }
  }
`;

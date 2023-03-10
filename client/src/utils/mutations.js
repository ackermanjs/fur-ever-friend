import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ANIMAL = gql`
  mutation addAnimal($Animal) {
    species
    breed
    name
    age
    sex
      comments {
        _id
        commentText
      }
    }
  }
`;

export const REMOVE_ANIMAL = gql`
  mutation removeAnimal($_id: ID!) {
   
    }
  }
`;

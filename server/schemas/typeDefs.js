const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    username: String!
    email: String
    animal: String
    savedAnimal: [Animal]
  }
  type Comment{
    commentText: String!
    commentAuthor: String!
  }
  type Animal {
    species: String
    breed: String
    name: String
    age: Int
    sex: String
    comments: [Comment]!
  }
  
  type Auth {
    token: ID!
    user: User
  }
  input Comments{
    commentText: String!
    commentAuthor: String!
  }
  input animalInput {
    species: String
    breed: String
    name: String
    age: Int
    sex: String
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveAnimal(
      animalInput: animalInput
    ): User
    removeAnimal(_id: ID!): User
  }
`;

module.exports = typeDefs;
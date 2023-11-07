const { gql } = require("apollo-server-express");

module.exports =gql`
    type User {
        id:String!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        hello: String
        users: [User]
        user: User
    }

    type Mutation {
        signUp(name: String!, email: String!, password: String!, role: String!):String
        
        signIn(name: String!, email: String!, password: String!):String
        
        updateUserById(name: String!, email: String!, password: String!):User
        
        createUser(name: String!, email: String!, password: String!):User

        updateUser(name: String!, email: String!, password: String!, id: String!):User

        deleteUser(id: String!): User
    }
`;
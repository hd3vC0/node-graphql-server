const schema = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User]
        getUser(id: Int!): User

    }

    type Mutation {
        addUser(name: String!, email: String!): User
    }
    `;

export default schema;
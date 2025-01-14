const typeDefs = `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    groceries: [Grocery]
    lists: [List]
}

type Grocery {
    _id: ID!
    type: String!
    name: String!
    count: String
    expiration: String
    hasitem: Boolean
}

type List {
    _id: ID!
    title: String!
    groceries: [Grocery]
}

type Query {
    users: [User!]
    user(username: String!): User
    groceries(username: String!): [Grocery]
    grocery(username: String!, groceryid: ID!): Grocery
    lists(username: String!): [List]
    list(username: String!, listId: ID!): List
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth!
    login(email: String!, password: String!): Auth!
    addGroceryItem(type: String!, expiration: String): Grocery!
    addList(title: String!): List!
    removeUser(_id: ID!): String!
    removeGroceryItem(groceryId: ID!): Grocery!
    removeList(listId: ID!): List!
}
`;

module.exports = typeDefs;
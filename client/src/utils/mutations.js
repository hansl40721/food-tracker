const { gql } = require('@apollo/client');

const LOGIN = gql`
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

const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

const ADD_GROCERY_ITEM = gql`
    mutation addGroceryItem(
        $type: String!
        $name: String!
        $expiration: String
    ) {
        addGroceryItem(
            type: $type
            name: $name
            expiration: $expiration
        ) {
            _id
            type
            name
            count
            expiration
            hasItem
        }
    }
`;

const ADD_LIST = gql`
    mutation addList($title: String!) {
        addList(title: $title) {
            _id
            title
            groceries {
                _id
                type
                name
                count
                expiration
                hasItem
            }
        }
    }
`;

const REMOVE_USER = gql`
    mutation removeUser($_id: ID!) {
        removeUser(_id: $_id) {
            username
            email
            password
        }
    }
`

const REMOVE_GROCERY_ITEM = gql`
    mutation removeGroceryItem($groceryId: ID!) {
        removeGroceryItem(groceryId: $groceryId) {
            _id
            type
            name
            count
            expiration
            hasItem
        }
    }
`;

const REMOVE_LIST = gql`
    mutation removeList($listId: ID!) {
        removeList(listId: $listId) {
            _id
            title
            groceries {
                _id
                type
                name
                count
                expiration
                hasItem
            }
        }
    }
`;

module.exports = { 
    LOGIN, 
    ADD_USER, 
    ADD_GROCERY_ITEM, 
    ADD_LIST, 
    REMOVE_USER, 
    REMOVE_GROCERY_ITEM, 
    REMOVE_LIST };
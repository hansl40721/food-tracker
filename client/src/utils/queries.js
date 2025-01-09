const { gql } = require("@apollo/client");

export const QUERY_USERS = gql`
    query getUsers {
        users {
            _id
            username
            groceries {
                _id
                type
                name
                count
                expiration
                hasItem
            }
            lists {
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
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            groceries {
                _id
                type
                name 
                count
                expiration
                hasItem
            }
            lists {
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
    }
`;

export const QUERY_GROCERIES = gql`
    query getGroceries {
        groceries {
            _id
            type
            name
            count
            expiration
            hasItem
        }
    }
`;

export const QUERY_SINGLE_GROCERY = gql`
    query getSingleGrocery($groceryId: ID!) {
        grocery(groceryId: $groceryId) {
            _id
            type
            name
            count
            expiration
            hasItem
        }
    }
`;

export const QUERY_LISTS = gql`
    query getLists {
        lists {
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

export const QUERY_SINGLE_LIST = gql`
    query getSingleList($listId: ID!) {
        list(listId: $listId) {
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
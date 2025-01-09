const { gql } = require("@apollo/client");

const QUERY_USERS = gql`
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

const QUERY_USER = gql`
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

const QUERY_GROCERIES = gql`
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

const QUERY_SINGLE_GROCERY = gql`
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

const QUERY_LISTS = gql`
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

const QUERY_SINGLE_LIST = gql`
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

module.exports = {
    QUERY_USERS,
    QUERY_USER,
    QUERY_GROCERIES,
    QUERY_SINGLE_GROCERY,
    QUERY_LISTS,
    QUERY_SINGLE_LIST
};
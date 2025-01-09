const { gql } = require("@apollo/client");

const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
        }
    }
`;

const QUERY_GROCERIES = gql`
    query getGroceries {
        groceries {
            type
            name
            count
            expiration
            hasItem
        }
    }
`;

const QUERY_SINGLE_GROCERY = gql`
    query getGroceryItem($groceryId: ID!) {
        groceryItem(groceryId: $groceryId) {
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
                type
                name
                count
                expiration
                hasItem
            }
        }
    }
`;
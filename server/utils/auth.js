const { GraphQLError } = require('graphql');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_Secret;
const expiration = '1h';

module.exports = {
    AuthenticationError: new GraphQLError("Could not authenticate user", {
        extensions: {
            code: "UNAUTHENTICATED"
        }
    }),

    authMiddleware: function({req}){
        let token = req.body.token || req.query.token || req.headers.authorization || "";

        token.split(' ').pop().trim();

        if(token.length === 0){
            req;
        }

        try{
            const {authenticatedUser} = jwt.verify(token, secret, {maxAge: expiration})
            req.user = authenticatedUser;
        } catch {
            console.log('Invalid token');
        }
        return req;
    },

    signToken: function({ email, username, _id }){
        const payload = { email, username, _id }
        return jwt.sign({authenticatedUser: payload}, secret, {expires: expiration});
    }
}
import { User, Grocery, List } from '../models';
import { signToken, AuthenticationError } from '../utils/auth';

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('groceries');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('groceries');
        },
        groceries: async (parent, { username }) => {
            const user = await User.findOne({ username }).populate('groceries');

            if (!user) {
                throw new Error('User not found');
            }

            return user.groceries.sort((a, b) => a.name.localCompare(b.name));
        },
        grocery: async (parent, { username, groceryId }) => {
            const user = await User.findOne({ username });

            if(!user) {
                throw new Error('User not found');
            }

            const hasGroceryItem = user.groceries.includes(groceryId);

            if(!hasGroceryItem) {
                throw new Error('Grocery item not found in user\'s groceries');
            }

            return Grocery.findOne({_id: groceryId });
        },
        lists: async (parent, { username }) => {
            const user = await User.findOne({ username }).populate('lists');

            if (!user) {
                throw new Error('User not found');
            }

            return user.lists;
        },
        list: async (parent, { username, listId }) => {
            const user = await User.findOne({ username });

            if(!user) {
                throw new Error('User not found');
            }

            const hasList = user.lists.includes(listId);

            if(!hasList) {
                throw new Error('List not found');
            }

            return List.findOne({ _id: listId })
        }
    },

    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('User not found');
            }

            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);

            return { token, user };
        },
        addGroceryItem: async (parent, { type, name, expiration }, context) => {
            if(context.user) {
                const groceryItem = await Grocery.create({ 
                    type,
                    name,
                    expiration,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { groceries: groceryItem._id } }
                );

                return groceryItem;
            }
            throw new AuthenticationError('Unable to add item');
        },
        addList: async (parent, { title }, context) => {
            if(context.user) {
                const list = await List.create({ title });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { lists: list._id } }
                );

                return list;
            }
            throw new AuthenticationError('Unable to add list');
        },
        removeGroceryItem: async (parent, { groceryId }, context) => {
            if(context.user) {
                const groceryItem = await Grocery.findOneAndDelete({ _id: groceryId });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { groceries: groceryItem._id }}
                );

                return groceryItem;
            }
            throw new AuthenticationError('Unable to remove item');
        },
        removeList: async (parent, { listId }, context) => {
            if( context.user) {
                const list = await List.findOneAndDelete({ _id: listId});

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { lists: list._id }}
                );

                return list;
            }
            throw new AuthenticationError('Unable to remove list');
        },
    },
};

module.exports = resolvers;
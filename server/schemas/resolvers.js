const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  //this is the root query for our graphql server and it returns the user object if the user is logged in
  //if the user is not logged in it returns null and throws an error to the client to handle it
  //basically this is like using monogoose findOne() method to find a user in the database and returning it
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Not loggged in");
    },
  },
  //this is the mutation for our graphql server and it takes in the user input and creates a new user in the database
  //it returns the user object if the user is created successfully
  //if the user is not created successfully it returns null and throws an error to the client to handle it
  //basically this is like using monogoose create() method to create a new user in the database and returning it
  //sign token is a function that takes in the user data and signs a token with the secret and expiration date
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    //saveBook is a mutation that takes in the user input and creates a new book in the database
    //it returns the user object if the book is created successfully
    //if the book is not created successfully it returns null and throws an error to the client to handle it
    //basically this is like using monogoose create() method to create a new book in the database and returning it
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be loggeed in");
    },
    //removeBook is a mutation that takes in the user input and removes a book from the database
    //it returns the user object if the book is removed successfully
    //if the book is not removed successfully it returns null and throws an error to the client to handle it
    //basically this is like using monogoose remove() method to remove a book from the database and returning it
    removeBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;

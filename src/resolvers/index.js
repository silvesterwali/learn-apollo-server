const Employees = require('../db/Employee');
const Comments = require('../db/Comment');
const Post = require('../db/Post');
const Office = require('../db/Office');

module.exports = {
  Query: {
    employees: () => Employees,
    employee(_parent, args, _ctx, info) {
      return Employees.find((e) => e.id === args.id);
    },
    posts: () => Post,
    post(_parent, args, _ctx, info) {
      return Post.find((el) => el.id === args.id);
    },
    offices: () => Office,
  },
  Mutation: {
    addOffice(_parent, args, _ctx, _info) {
      const id = Office.length + 1;
      Office.push({ id, ...args });
      return Office.find((el) => el.id === id);
    },
    createPost(_parent, args, _ctx, _info) {
      const id = Post.length + 1;
      Post.push({ id, ...args.input, userId: 1 });
      return Post.find((el) => el.id === id);
    },
  },
  Employee: {
    posts(parent, _args, _ctx, info) {
      return Post.filter((el) => el.userId === parent.id);
    },
    office(parent, _args, _ctx, _info) {
      return Office.find((el) => el.id === parent.officeId);
    },
  },
  Post: {
    author(parent, _args, _ctx, _info) {
      return Employees.find((el) => el.id === parent.userId);
    },
    comments(parent, _args, _ctx, _info) {
      return Comments.filter((el) => el.postId === parent.id);
    },
  },
  Comment: {
    post(parent, _args, _ctx, _info) {
      return Post.find((el) => el.id === parent.postId);
    },
  },
  Office: {
    employees(parent, _args, _ctx, _info) {
      return Employees.filter((el) => el.officeId === parent.id);
    },
  },
};

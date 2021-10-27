const Employees = require('../db/Employee');
const Comments = require('../db/Comment');
const Post = require('../db/Post');
module.exports = {
  Query: {
    employees: () => Employees,
    employee(_parent, args, _ctx, _info) {
      return Employees.find((e) => e.id === args.id);
    },
    posts: () => Post,
    post(_parent, args, _ctx) {
      return Post.find((el) => el.id === args.id);
    },
  },
  Employee: {
    posts(parent, _args, _ctx, _info) {
      return Post.filter((el) => el.userId === parent.id);
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
};

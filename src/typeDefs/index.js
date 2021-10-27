const { gql } = require('apollo-server');

module.exports = gql`
  type Employee {
    id: Int!
    name: String
    username: String
    email: String
    address: Address
    posts: [Post]
    officeId: Int
    office: Office
  }

  type Office {
    id: Int!
    code: String
    capacity: Int
    phone: String
    employees: [Employee]
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Post {
    id: Int!
    title: String
    body: String
    userId: Int
    author: Employee
    comments: [Comment]
  }

  type Comment {
    id: Int!
    name: String
    email: String
    body: String
    postId: Int
    post: Post
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
    posts: [Post]
    post(id: Int!): Post
    offices: [Office]
  }
`;

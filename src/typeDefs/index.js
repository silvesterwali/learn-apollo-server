const { gql } = require('apollo-server');

module.exports = gql`
  type Employee {
    id: Int!
    firstName: String
    lastName: String
    office: String
    families: [Family]
  }

  type Family {
    id: Int!
    employeeId: Int!
    relation: String
    firstName: String
    lastName: String
    familyOwner: Employee
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
    family: [Family]
  }
`;

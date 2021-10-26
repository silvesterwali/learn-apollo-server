const { gql } = require('apollo-server');

module.exports = gql`
  type Employee {
    id: Int!
    firstName: String
    lastName: String
    office: String
    families: [Family]
    officeAddress: [Office]
  }

  type Family {
    id: Int!
    employeeId: Int!
    relation: String
    firstName: String
    lastName: String
    familyOwner: Employee
  }

  type Office {
    id: Int!
    code: String
    capacity: Int
    employees: [Employee]
  }

  type Query {
    employees: [Employee]
    employee(id: Int!): Employee
    family: [Family]
    offices: [Office]
  }
`;

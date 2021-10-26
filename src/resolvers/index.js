const Employees = [
  {
    id: 1,
    firstName: 'Christian',
    lastName: 'Ronaldo',
    office: 'HO',
  },
  {
    id: 2,
    firstName: 'Leo',
    lastName: 'Messi',
    office: 'GYR',
  },
];

const Families = [
  {
    id: 1,
    employeeId: 1,
    firstName: 'Lisa',
    lastName: 'Ronaldo',
    relation: 'spouse',
  },
  {
    id: 2,
    employeeId: 1,
    firstName: 'Andika',
    lastName: 'Peter',
    relation: 'child',
  },
  {
    id: 3,
    employeeId: 2,
    firstName: 'Mega',
    lastName: 'Messi',
    relation: 'spouse',
  },
];

const Offices = [
  {
    id: 1,
    code: 'HO',
    capacity: 50,
  },
  {
    id: 2,
    code: 'GYR',
    capacity: 50,
  },
];

module.exports = {
  Query: {
    employees: () => Employees,
    employee(parent, args, ctx, info) {
      return Employees.find((e) => e.id === args.id);
    },
    family: () => Families,
    offices: () => Offices,
  },
  Employee: {
    families(parent, args, ctx, info) {
      return Families.filter((el) => el.employeeId === parent.id);
    },
    officeAddress(parent, args, ctx, info) {
      return Offices.find((el) => el.code === parent.office);
    },
  },
  Family: {
    familyOwner(parent, args, ctx, info) {
      return Employees.find((el) => e.id === parent.employeeId);
    },
  },
  Office: {
    employees(parent, args, ctx, info) {
      return Employees.filter((el) => el.office === parent.code);
    },
  },
};

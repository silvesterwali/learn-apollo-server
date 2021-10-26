const Employees = [
  {
    id: 1,
    firstName: 'Christian',
    lastName: 'Ronaldo',
    office: 'MU',
  },
  {
    id: 2,
    firstName: 'Leo',
    lastName: 'Messi',
    office: 'PSG',
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
    employeeId: 2,
    firstName: 'Mega',
    lastName: 'Messi',
    relation: 'spouse',
  },
];

module.exports = {
  Query: {
    employees: () => Employees,
    employee(parent, args, ctx, info) {
      return Employees.find((e) => e.id === args.id);
    },
    family: () => Families,
  },
  Employee: {
    families(parent, args, ctx, info) {
      return Families.filter((el) => el.employeeId === parent.id);
    },
  },
  Family: {
    familyOwner(parent, args, ctx, info) {
      return Employees.find((el) => e.id === parent.employeeId);
    },
  },
};

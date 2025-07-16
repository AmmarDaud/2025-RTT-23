type ID = number | string;

// Interface for Customer
interface Customer {
  id: ID;
  name: string;
  email: string;
  loyaltyMember?: boolean;
}

function createCustomer(customer: Customer): string {
  const { name, loyaltyMember } = customer;
  const membershipStatus = loyaltyMember ? "a loyal member" : "a valued customer";
  return `Welcome, ${name}! You are ${membershipStatus}.`;
}

const customer1: Customer = {
  id: 1,
  name: "Elizabeth Conley",
  email: "ellyza@example.com",
};
console.log(createCustomer(customer1));

const customer2: Customer = {
  id: 11,
  name: "Emilie Fantinet",
  email: "fella@example.com",
};

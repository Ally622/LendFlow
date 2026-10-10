type Customer = {
  name: string;
  loanAmount: number;
  isLoanApproved: boolean;
};

const customers: Customer[] = [
  {
    name: "John Kamau",
    loanAmount: 50000,
    isLoanApproved: true,
  },
  {
    name: "Mary Wanjiku",
    loanAmount: 30000,
    isLoanApproved: false,
  },
];

function CustomerDetails({ customer }: { customer: Customer }) {
  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Loan amount: KSh {customer.loanAmount}</p>
      <p>
        Loan approved: {customer.isLoanApproved ? "Yes" : "No"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>LendFlow Customer Manager</h1>

      {customers.map((customer) => (
        <CustomerDetails key={customer.name} customer={customer} />
      ))}
    </div>
  );
}

export default App;
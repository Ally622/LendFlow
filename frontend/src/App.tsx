
import { useState, type FormEvent } from "react";
import "./App.css";

type Customer = {
  id: number;
  name: string;
  phone: string;
  loanAmount: number;
  isLoanApproved: boolean;
};

const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "John Kamau",
    phone: "0712345678",
    loanAmount: 50000,
    isLoanApproved: true,
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    phone: "0723456789",
    loanAmount: 30000,
    isLoanApproved: false,
  },
];

function App() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [nextId, setNextId] = useState(3);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter the customer's full name.");
      return;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
      setError("Phone number must contain exactly 10 digits.");
      return;
    }

    const amount = Number(loanAmount);

    if (
      loanAmount.trim() === "" ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setError("Please enter a loan amount greater than zero.");
      return;
    }

    const newCustomer: Customer = {
      id: nextId,
      name: name.trim(),
      phone: phone.trim(),
      loanAmount: amount,
      isLoanApproved: false,
    };

    setCustomers((current) => [...current, newCustomer]);
    setNextId((current) => current + 1);
    setName("");
    setPhone("");
    setLoanAmount("");
  }

  const totalLoanAmount = customers.reduce(
    (total, customer) => total + customer.loanAmount,
    0
  );

  const approvedLoans = customers.filter(
    (customer) => customer.isLoanApproved
  ).length;

  const pendingLoans = customers.length - approvedLoans;

  const filteredCustomers = customers.filter((customer) => {
    const query = search.trim().toLowerCase();

    return (
      customer.name.toLowerCase().includes(query) ||
      customer.phone.includes(query)
    );
  });

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">L</div>
          <span>LendFlow</span>
        </div>

        <p className="nav-label">WORKSPACE</p>
        <div className="nav-item active">
          <span>▦</span> Dashboard
        </div>
        <div className="nav-item">
          <span>♙</span> Customers
        </div>
        <div className="nav-item">
          <span>▤</span> Loans
        </div>
        <div className="nav-item">
          <span>↻</span> Repayments
        </div>

        <div className="sidebar-note">
          <strong>Day 7 of 50</strong>
          <p>Building LendFlow one step at a time.</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h1>Dashboard</h1>
            <p className="muted">
              Manage your customers and monitor loan activity.
            </p>
          </div>
          <div className="admin-chip">
            <span className="avatar">A</span>
            <span>Administrator</span>
          </div>
        </header>

        <section className="summary-grid">
          <article className="summary-card">
            <div className="card-top">
              <span>Total customers</span>
              <span className="card-icon blue">♙</span>
            </div>
            <p className="metric">{customers.length}</p>
            <p className="card-foot">Registered customer records</p>
          </article>

          <article className="summary-card">
            <div className="card-top">
              <span>Total loan amounts</span>
              <span className="card-icon purple">KSh</span>
            </div>
            <p className="metric">
              KSh {totalLoanAmount.toLocaleString("en-KE")}
            </p>
            <p className="card-foot">Combined requested amounts</p>
          </article>

          <article className="summary-card">
            <div className="card-top">
              <span>Approved loans</span>
              <span className="card-icon green">✓</span>
            </div>
            <p className="metric">{approvedLoans}</p>
            <p className="card-foot">Customers marked as approved</p>
          </article>

          <article className="summary-card">
            <div className="card-top">
              <span>Pending loans</span>
              <span className="card-icon orange">◷</span>
            </div>
            <p className="metric">{pendingLoans}</p>
            <p className="card-foot">Awaiting a loan decision</p>
          </article>
        </section>

        <section className="panel">
          <div className="section-heading">
            <div>
              <h2>Register a customer</h2>
              <p className="muted">
                Enter the customer's details to add a new record.
              </p>
            </div>
          </div>

          <form className="customer-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Grace Akinyi"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="0712345678"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setError("");
                }}
                required
              />
              <small>Enter exactly 10 digits.</small>
            </div>

            <div className="form-field">
              <label htmlFor="loanAmount">Loan amount (KSh)</label>
              <input
                id="loanAmount"
                type="number"
                min="1"
                step="1"
                placeholder="25000"
                value={loanAmount}
                onChange={(event) => {
                  setLoanAmount(event.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit">+ Register customer</button>
            </div>
          </form>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}
        </section>

        <section className="panel">
          <div className="section-heading records-heading">
            <div>
              <h2>Customer records</h2>
              <p className="muted">
                Review registered customers and their loan status.
              </p>
            </div>
            <span className="record-count">
              {customers.length} total
            </span>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="search"
              aria-label="Search customers"
              placeholder="Search by customer name or phone..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="table-wrapper">
            <table className="customer-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Phone number</th>
                  <th>Loan amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <div className="customer-name">
                        <span className="customer-avatar">
                          {customer.name.charAt(0).toUpperCase()}
                        </span>
                        <strong>{customer.name}</strong>
                      </div>
                    </td>
                    <td>{customer.phone}</td>
                    <td>
                      KSh {customer.loanAmount.toLocaleString("en-KE")}
                    </td>
                    <td>
                      <span
                        className={`status ${
                          customer.isLoanApproved
                            ? "status-approved"
                            : "status-pending"
                        }`}
                      >
                        {customer.isLoanApproved ? "Approved" : "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredCustomers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="empty-state">
                      No customers found. Try another search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="page-footer">
          LendFlow · 50-Day Full Stack Development Challenge
        </footer>
      </main>
    </div>
  );
}

export default App;

# Day 6 — LendFlow Customer Registration Form

## Goal
Build a customer registration form using React and TypeScript.

## Features Completed
- Created a customer registration form.
- Added fields for customer full name, phone number, and loan amount.
- Used React `useState` to manage form values and customer records.
- Validated that the customer's name is not empty.
- Required the phone number to contain exactly 10 digits.
- Required the loan amount to be greater than zero.
- Displayed validation error messages.
- Added new customers to the customer list.
- Displayed each customer's phone number, loan amount, and loan approval status.
- Cleared the form after successful registration.

## Concepts Learned
- React components and JSX.
- React state with `useState`.
- Handling form submissions with `onSubmit`.
- Handling input changes with `onChange`.
- TypeScript types and typed arrays.
- Form validation and conditional rendering.
- Rendering lists with `map()`.

## Current Limitations
- Customer records are stored in React state and are lost when the page refreshes.
- There is no backend or database connection yet.
- Authentication and user permissions have not been implemented.

## Next Steps
- Improve the customer interface.
- Learn how to connect the frontend to a backend.
- Store customer records in a database in a later stage.

## Day 6 Status
- [x] Build the registration form.
- [x] Manage form values using React state.
- [x] Add customer registration.
- [x] Add input validation and error messages.
- [x] Display registered customers.
- [x] Document Day 6.
- [x] Commit and push Day 6 to GitHub.

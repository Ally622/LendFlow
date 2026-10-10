# Day 5 — TypeScript Fundamentals

## Goal
Learn TypeScript fundamentals and practise displaying customer records in the LendFlow React frontend.

## What I learned

- `string` represents text.
- `number` represents numeric values.
- `boolean` represents `true` or `false`.
- TypeScript `type` definitions describe the structure of an object.
- `Customer[]` represents an array of customer objects.
- React components display reusable sections of the interface.
- Props allow components to receive customer data.
- `.map()` renders a component for each customer in an array.
- React's `key` prop helps identify list items.

## Practical exercise

I created a typed customer structure with:
- Customer name
- Loan amount
- Loan approval status

I practised displaying multiple customer records in the LendFlow frontend using React and TypeScript.

## Example customer type

```typescript
type Customer = {
  name: string;
  loanAmount: number;
  isLoanApproved: boolean;
};
```

## Project setup

- Main project: LendFlow
- Frontend: React, TypeScript, and Vite
- Separate React practice project: used for additional React exercises

## Next steps

- Learn TypeScript interfaces and optional properties.
- Learn React forms and controlled inputs.
- Build a customer registration form.
- Continue committing progress to GitHub.

/**
 * Record data
 *
 * ID: unique identifier of the record -> 66a3f000-7bd7-4c9e-80de-de5e0aabc32c
 * Date: when record is created or occurs -> Friday, 22 August 2024
 * Type: categorize financial transactions -> has 2 val, income and expense
 * Category: spending or income category -> Salary, selling, etc for income. Gas, rent, etc for expense
 * Account: target account that effect this transaction -> E-money, Cash
 * Amount: value of transaction -> 50,000
 * Note: (optional) user note -> this is gift from my mother
 */

export let recordDataProto = [
  {
    id: "66a3f000-7bd7-4c9e-80de-de5e0aabc32c",
    date: "Friday, 22 August 2024",
    type: "income",
    category: "Salary",
    account: "Bank Account",
    amount: 50000,
    note: "Monthly salary",
  },
  {
    id: "bc1aef45-9c34-4e7e-9d6a-7a84d8e1e2c4",
    date: "Friday, 22 August 2024",
    type: "expense",
    category: "Rent",
    account: "Bank Account",
    amount: 15000,
    note: "Monthly apartment rent",
  },
  {
    id: "b4d8729a-4567-4bb4-8a8b-8d4c88f9a0b9",
    date: "Friday, 22 August 2024",
    type: "expense",
    category: "Groceries",
    account: "Credit Card",
    amount: 3000,
    note: "Weekly groceries",
  },
  {
    id: "3f9a672e-774b-4d3b-8aeb-ef6885c16c37",
    date: "Friday, 22 August 2024",
    type: "income",
    category: "Freelance Work",
    account: "E-money",
    amount: 20000,
    note: "Payment for design project",
  },
  {
    id: "7c3f5c99-a9c5-4b7a-91b8-bd5c3e8fd6f2",
    date: "Friday, 22 August 2024",
    type: "expense",
    category: "Utilities",
    account: "Bank Account",
    amount: 5000,
    note: "Monthly utility bills",
  },
];

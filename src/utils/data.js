import { currentAccounts, transactions } from "../store/appdata";

export function updateTransactions(transaction) {
  updateTransactionHistory(transaction);
  updateAccounts(transaction);
}

function updateTransactionHistory(transaction) {
  transactions.update((current) => [...current, transaction]);
}

function updateAccounts({ account: accountName, type, amount }) {
  currentAccounts.update((accounts) => {
    accounts.forEach((account) => {
      if (accountName === account.name) {
        account.amount += type === "income" ? Number(amount) : Number(amount) * -1.0;
      }
    });
    return accounts;
  });
}

import { wallets, transactions } from "../store/appdata";

export function updateTransactions(transaction) {
  updateTransactionHistory(transaction);
  updateWallets(transaction);
}

function updateTransactionHistory(transaction) {
  transactions.update((current) => [...current, transaction]);
}

function updateWallets({ name, type, amount }) {
  wallets.update((currentWallets) => {
    currentWallets.forEach((wallet) => {
      if (name === wallet.name) {
        wallet.amount += type === "income" ? Number(amount) : Number(amount) * -1.0;
      }
    });
    return currentWallets;
  });
}

import { derived, writable } from "svelte/store";
import { defaultAccountsProto } from "../data/dataLab";
import { formatDateID } from "../utils/date";

export let transactions = writable([]);
export let currentAccounts = writable([]);

export let transactionSortedDate = derived(transactions, ($transactions) => {
  let sortedTransaction = new Map();

  let unsorted = $transactions.reduce((total, transaction) => {
    let date = transaction.date;
    let groupID = formatDateID(date);

    if (!total[groupID]) {
      total[groupID] = [];
    }

    total[groupID].push(transaction);
    return total;
  }, {});

  let sortedKeys = Object.keys(unsorted).sort((a, b) => Number(b) - Number(a));
  sortedKeys.forEach((key) => {
    sortedTransaction.set(key, unsorted[key]);
  });

  return sortedTransaction;
});

// LAB: Mock data from data lab
currentAccounts.set(defaultAccountsProto);

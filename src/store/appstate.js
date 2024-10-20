import { writable } from "svelte/store";

export let currentRoute = writable("transaction-page");
export let isTransactionFormOpen = writable(false);
export let isWalletFormOpen = writable(false);

// FORM
export let transactionType = writable("income");

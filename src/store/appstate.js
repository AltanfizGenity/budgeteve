import { writable } from "svelte/store";

export let currentRoute = writable("account");
export let isTransactionFormOpen = writable(false);
export let isAccountFormOpen = writable(false);

// FORM
export let transactionType = writable("income");

import { currentAccounts, currentRecords } from "../store/appdata";

export function updateRecordData(newRecord) {
  updateRecordsHistory(newRecord);
  updateAccounts(newRecord);
}

function updateRecordsHistory(newRecord) {
  currentRecords.update((current) => [...current, newRecord]);
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

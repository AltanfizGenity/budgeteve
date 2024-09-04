import { currentAccounts, currentRecords } from "../store/appdata";

export function updateRecords(newRecord) {
  currentRecords.update((current) => [...current, newRecord]);
  currentAccounts.update((current) => {
    current.forEach((account) => {
      if (account.name === newRecord.account) {
        account.amount += Number(newRecord.amount);
        return;
      }
    });
    return current;
  });
}

class Account{
  Acc_no:number;
  Balance:number;

  debitAmount(){

  }

  creditAmount(){

  }

  getBalance(){

  }
}

interface IAccount{
  Date_of_opening:string;

  addCustomer();
  removeCustomer();
}


class Current_Account extends Account implements IAccount{
  Date_of_opening: string;
  Interest_rate:number;
  addCustomer() {
  }
  removeCustomer() {
  }

}


class Saving_Account extends Account implements IAccount{
  Date_of_opening: string;
  Min_Balance:number;
  addCustomer() {
  }
  removeCustomer() {
  }

}
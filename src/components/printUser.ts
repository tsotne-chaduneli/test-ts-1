import type { printAccount } from "../types/accounts.js";
import { account } from "../data/accounts.js";

function printUser(user:printAccount | undefined = account.at(-1)) {
  if(!user){
    console.log(`მომხმარებელი ვერ მოიძებნა`);
    return;
  }

  if (user.verified) {
    console.log(user.name);
  }else{
    console.log(`მომხმარებელი ${user.name} არ არის გადამოწმებული`);
  }
}

export { printUser };
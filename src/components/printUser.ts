import type { printAccount } from "../types/accounts.js";
import { account } from "../data/accounts.js";

function printUser(user:printAccount | undefined = account.at(-1)) {
  if(!user){
    console.log(`მომხმარებელი ვერ მოიძებნა`);
    return;
  }
const userEl = document.getElementById("user")
  if (user.verified && userEl) {
     userEl.innerHTML = `<h1>${user.name}</h1>`;
  }else{
    console.log(`მომხმარებელი ${user.name} არ არის გადამოწმებული`); 
  }
}

export { printUser };
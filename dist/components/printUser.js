import { account } from "../data/accounts.js";
function printUser(user = account.at(-1)) {
    if (!user) {
        console.log(`მომხმარებელი ვერ მოიძებნა`);
        return;
    }
    const userEl = document.getElementById("user");
    if (user.verified && userEl) {
        userEl.innerHTML = `<h1>${user.name}</h1>`;
    }
    else {
        console.log(`მომხმარებელი ${user.name} არ არის გადამოწმებული`);
    }
}
export { printUser };
//# sourceMappingURL=printUser.js.map
// const discounts: Array<Products> = [
const discounts = [
    {
        id: 1,
        name: 'შოკოლადი',
        description: 'შავი შოკოლადი',
        price: 3.7,
        date_prod: '2026-04-20',
        date_exp: '2026-08-20',
    },
];
const account = [
    {
        name: 'ვერიკო',
        verified: true,
    },
];
function printUser(user) {
    if (!user) {
        console.log(`მომხმარებელი ვერ მოიძებნა`);
        return;
    }
    if (user.verified) {
        console.log(user.name);
    }
    else {
        console.log(`მომხმარებელი ${user.name} არ არის გადამოწმებული`);
    }
}
printUser(account.at(-1));
export {};
//# sourceMappingURL=app.js.map
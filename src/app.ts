interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  date_prod: string;
  date_exp: string;
}

// const discounts: Array<Products> = [
const discounts: Products[] = [
  {
    id: 1,
    name: 'შოკოლადი',
    description: 'შავი შოკოლადი',
    price: 3.7,
    date_prod: '2026-04-20',
    date_exp: '2026-08-20',
  },
];

interface User {
  name: string;
  pwd: string;
  verified: boolean;
  tel?: string;
}

type printAccount = Omit<User, 'pwd'>;

const account: printAccount[] = [
  {
    name: 'ვერიკო',
    verified: true,
  },
];

type status = 'success' | 'active' | 'pending';

function printUser(user:printAccount | undefined) {
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

printUser(account.at(-1));

export {}
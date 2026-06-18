interface User {
    name: string;
    pwd: string;
    verified: boolean;
    tel?: string;
}

type status = 'success' | 'active' | 'pending';

type printAccount = Omit<User, 'pwd'>;

export type { User, printAccount };
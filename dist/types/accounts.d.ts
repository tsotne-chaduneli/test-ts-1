interface User {
    name: string;
    pwd: string;
    verified: boolean;
    tel?: string;
}
type printAccount = Omit<User, 'pwd'>;
export type { User, printAccount };
//# sourceMappingURL=accounts.d.ts.map
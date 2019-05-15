export function sum(...args: number[]): number{
    return args.reduce((acc,n) => acc + n, 0);
}
export type Injector<T = unknown> = {
    instance?: T;
    type: Class<T>;
    params: Class[];
    id: number;
};

export interface Class<T = unknown> {
    new (...args: unknown[]): T;
}

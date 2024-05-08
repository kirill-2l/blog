export type SortOrder = 'asc' | 'desc';

export type DeepPartial<T> = T extends object ? {
    [P in keyof T]: DeepPartial<T[P]>;
} : T;

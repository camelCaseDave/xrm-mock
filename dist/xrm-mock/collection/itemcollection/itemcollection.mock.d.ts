/// <reference types="xrm" />
export declare class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
    itemCollection: T[];
    constructor(itemCollection?: T[]);
    forEach(delegate: () => void): void;
    forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void;
    get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
    get(item: number | string): T;
    get(): T[];
    getLength(): number;
    push(item: T): void;
}

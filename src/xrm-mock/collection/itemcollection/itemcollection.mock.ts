export class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
    public itemCollection: T[];

    constructor(itemCollection?: T[]) {
        this.itemCollection = itemCollection || [];
    }

    public forEach(delegate: () => void): void;
    public forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void;
    public forEach(delegate: any): void {
        const modifiedCollection = this.itemCollection.map(delegate);
        this.itemCollection = modifiedCollection as any as T[];
    }

    public get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
    public get(item: number | string): T;
    public get(): T[];

    public get(param?: string | number | Xrm.Collection.MatchingDelegate<T> | T[]): T | T[] {
        if (param === undefined || param === null) {
            return this.itemCollection as T[];
        } else if (typeof param === "string") {
            let attribute;

            for (const item of this.itemCollection as any) {
                if (item.getName !== undefined) {
                    if (item.getName() === param) {
                        attribute = item;
                        break;
                    }
                }
            }

            return attribute;
        } else if (typeof param === "number") {
            return this.itemCollection[param];
        } else if (param as Xrm.Collection.MatchingDelegate<T> !== undefined) {
            throw new Error("get itemcollection as delegate not implemented");
        }
    }

    public getLength(): number {
        return this.itemCollection.length;
    }

    public push(item: T): void {
        this.itemCollection.push(item);
    }
}

export class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
    itemCollection: T[];

    constructor(itemCollection?: T[]) {
        this.itemCollection = itemCollection || [];
    }

    forEach(delegate: Xrm.Collection.IterativeDelegate<T> | Function): void {
        this.itemCollection.forEach(i => (i: any) => {
            if (<Xrm.Collection.IterativeDelegate<T>>delegate !== undefined)
                (delegate as Xrm.Collection.IterativeDelegate<T>)(i);
            else
                (delegate as Function)(i);
        });
    }

    get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
    get(itemNumber: number): T;
    get(itemName: string): T;
    get(): T[];

    get(param?: string | number | Xrm.Collection.MatchingDelegate<T> | T[]): T | T[] {
        if (param === undefined || param === null) {
            return this.itemCollection as T[];
        }
        else if (param && typeof param === 'string') {
            let attrs = this.itemCollection.filter(function (item) {
                return ((<Xrm.Page.Attribute><any>item).getName() === param);
            });

            return attrs[0] || undefined;
        }
        else if (typeof param === 'number') {
            return this.itemCollection[param];
        }
        else if (param && <Xrm.Collection.MatchingDelegate<T>>param !== undefined) {
            throw ('get itemcollection as delegate not implemented');
        }
    }

    getLength(): number {
        return this.itemCollection.length;
    }
}
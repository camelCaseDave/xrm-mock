import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { FormItemMock } from "../formitem/formitem.mock";

export class FormSelectorMock implements Xrm.Page.FormSelector {
    public items: ItemCollectionMock<FormItemMock>;

    constructor(items: ItemCollectionMock<FormItemMock>) {
        this.items = items;
    }

    public getCurrentItem(): Xrm.Page.FormItem {
        let currentItem: Xrm.Page.FormItem;

        if (this.items.itemCollection && this.items.itemCollection.length) {
            currentItem = this.items.itemCollection.filter((i) => i.currentItem)[0] || null;
        }

        return currentItem;
    }
}

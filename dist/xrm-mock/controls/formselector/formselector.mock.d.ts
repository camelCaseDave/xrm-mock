/// <reference types="xrm" />
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { FormItemMock } from "../formitem/formitem.mock";
export declare class FormSelectorMock implements Xrm.Controls.FormSelector {
    items: ItemCollectionMock<FormItemMock>;
    constructor(items: ItemCollectionMock<FormItemMock>);
    getCurrentItem(): Xrm.Controls.FormItem;
}

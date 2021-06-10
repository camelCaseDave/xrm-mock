import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { UiCanGetVisibleElementMock } from "../uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiLabelElementMock } from "../uilabelelement/uilabelelement.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";

export class SectionMock implements Xrm.Controls.Section {
    public controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    public parent: Xrm.Controls.Tab;

    private name: string;
    private uiStandardElement: Xrm.Controls.UiStandardElement;

    constructor(name: string, parent?: Xrm.Controls.Tab, uiStandardElement?: Xrm.Controls.UiStandardElement,
                controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>) {
        this.name = name;
        this.parent = parent;

        if (this.parent && this.parent.sections.get(name) == null) {
            const sections = this.parent.sections as ItemCollectionMock<Xrm.Controls.Section>;

            if (sections) {
                sections.push(this);
            }
        }

        this.uiStandardElement = uiStandardElement
            || new UiStandardElementMock(new UiLabelElementMock(name), new UiCanGetVisibleElementMock(true));
        this.controls = controls || new ItemCollectionMock();
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): Xrm.Controls.Tab {
        return this.parent;
    }

    public setVisible(visible: boolean): void {
        this.uiStandardElement.setVisible(visible);
    }

    public getVisible(): boolean {
        return this.uiStandardElement.getVisible();
    }

    public getLabel(): string {
        return this.uiStandardElement.getLabel();
    }

    public setLabel(label: string): void {
        this.uiStandardElement.setLabel(label);
    }
}

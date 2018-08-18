import { ItemCollectionMock } from "../..";
import { UiCanGetVisibleElementMock } from "../uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiLabelElementMock } from "../uilabelelement/uilabelelement.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";

export class SectionMock implements Xrm.Controls.Section {
    public controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
	public parent: Xrm.Controls.Tab;
	
    private name: string;
    // [Yagasoft | 2018-08-05 | Changed] made it public to be set when section is added to tab
    private uiStandardElement: Xrm.Controls.UiStandardElement;

    // [Yagasoft | 2018-08-09 | Changed] made the parent optional, in case the user wants to build it through a single constructor
    constructor(name: string, parent?: Xrm.Controls.Tab, uiStandardElement?: Xrm.Controls.UiStandardElement,
                controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>) {
        this.name = name;
        this.parent = parent;

        // [Yagasoft | 2018-08-09 | Added] add section to parent
        if (this.parent && this.parent.sections.get(name) == null) {
            const sections = this.parent.sections as ItemCollectionMock<Xrm.Controls.Section>;

            if (sections) {
                sections.push(this);
            }
        }

        // [Yagasoft | 2018-08-05 | Added] default state values
        this.uiStandardElement = uiStandardElement
            || new UiStandardElementMock(new UiLabelElementMock(name), new UiCanGetVisibleElementMock(true));
        this.controls = controls;
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

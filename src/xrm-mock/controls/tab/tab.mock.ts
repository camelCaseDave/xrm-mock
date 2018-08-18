import { UiFocusableMock } from "../uifocusable/uifocusable.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";
import { UiLabelElementMock } from "../uilabelelement/uilabelelement.mock";
import { UiCanGetVisibleElementMock } from "../uicangetvisibleelement/uicangetvisibleelement.mock";
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { SectionMock } from "../..";

export class TabMock implements Xrm.Controls.Tab {
  public sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;

  private uiStandardElement: Xrm.Controls.UiStandardElement;
  private uiFocusableElement: Xrm.Controls.UiFocusable;
  private name: string;
  private parent: Xrm.Ui;
  private displayState: Xrm.DisplayState;

  constructor(components: ITabComponents) {
    // [Yagasoft | 2018-08-05 | Added] default state values
    this.uiStandardElement = components.uiStandardElement
      || new UiStandardElementMock(new UiLabelElementMock(components.name), new UiCanGetVisibleElementMock(true));
    this.uiFocusableElement = components.uiFocusableElement || new UiFocusableMock(false);
    this.name = components.name;
    this.parent = components.parent;
    this.displayState = components.displayState || "expanded";
    
    // [Yagasoft | 2018-08-05 | Added] sections definition
    this.sections = components.sections || new ItemCollectionMock([]);
    // [Yagasoft | 2018-08-09 | Added] set sections' parent
	this.sections.forEach((section: Xrm.Controls.Section, index: number) =>
	{
		const sectionMock = section as SectionMock;

		if (sectionMock) {
			sectionMock.parent = this;
		}
	});
  }

  public getDisplayState(): Xrm.DisplayState {
    return this.displayState;
  }
  public getName(): string {
    return this.name;
  }

  public getParent(): Xrm.Ui {
    return this.parent;
  }

  public setDisplayState(displayState: Xrm.DisplayState): void {
    this.displayState = displayState;
  }

  public setVisible(visible: boolean): void {
    return this.uiStandardElement.setVisible(visible);
  }

  public getVisible(): boolean {
    return this.uiStandardElement.getVisible();
  }

  public getLabel(): string {
    return this.uiStandardElement.getLabel();
  }

  public setLabel(label: string): void {
    return this.uiStandardElement.setLabel(label);
  }

  public setFocus(): void {
    return this.uiFocusableElement.setFocus();
  }
}

export interface ITabComponents {
  uiStandardElement?: Xrm.Controls.UiStandardElement;
  uiFocusableElement?: Xrm.Controls.UiFocusable;
  name?: string;
  parent?: Xrm.Ui;
  displayState?: Xrm.DisplayState;
  sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
}

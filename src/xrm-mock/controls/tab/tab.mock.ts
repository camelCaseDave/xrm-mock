import { findIndex } from "../../../xrm-mock-generator/helpers/array.helper";
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { SectionMock } from "../section/section.mock";
import { UiCanGetVisibleElementMock } from "../uicangetvisibleelement/uicangetvisibleelement.mock";
import { UiFocusableMock } from "../uifocusable/uifocusable.mock";
import { UiLabelElementMock } from "../uilabelelement/uilabelelement.mock";
import { UiStandardElementMock } from "../uistandardelement/uistandardelement.mock";

export class TabMock implements Xrm.Controls.Tab {
  public sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
  public tabStateChangeHandlers: Xrm.Events.ContextSensitiveHandler[];

  private uiStandardElement: Xrm.Controls.UiStandardElement;
  private uiFocusableElement: Xrm.Controls.UiFocusable;
  private name: string;
  private parent: Xrm.Ui;
  private displayState: Xrm.DisplayState;

  constructor(components: ITabComponents) {
    this.uiStandardElement = components.uiStandardElement
      || new UiStandardElementMock(new UiLabelElementMock(components.name), new UiCanGetVisibleElementMock(true));
    this.uiFocusableElement = components.uiFocusableElement || new UiFocusableMock(false);
    this.name = components.name;
    this.parent = components.parent;
    this.displayState = components.displayState || "expanded";
    this.tabStateChangeHandlers = components.tabStateChangeHandlers || [] as Xrm.Events.ContextSensitiveHandler[];
    this.sections = components.sections || new ItemCollectionMock([]);
    this.sections.forEach((section: Xrm.Controls.Section, index: number) => {
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

  public addTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void {
    this.tabStateChangeHandlers.push(handler);
  }

  public removeTabStateChange(handler: (context: Xrm.Events.EventContext) => void): void {
    const index: number = findIndex(this.tabStateChangeHandlers, handler);
    this.tabStateChangeHandlers.splice(index, 1);
  }
}

export interface ITabComponents {
  uiStandardElement?: Xrm.Controls.UiStandardElement;
  uiFocusableElement?: Xrm.Controls.UiFocusable;
  name?: string;
  parent?: Xrm.Ui;
  displayState?: Xrm.DisplayState;
  sections?: Xrm.Collection.ItemCollection<Xrm.Controls.Section>;
  tabStateChangeHandlers?: Xrm.Events.ContextSensitiveHandler[];
}

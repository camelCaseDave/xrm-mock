import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { FormItemMock } from "../../../src/xrm-mock/controls/formitem/formitem.mock";
import { FormSelectorMock } from "../../../src/xrm-mock/controls/formselector/formselector.mock";
import { TabMock } from "../../../src/xrm-mock/controls/tab/tab.mock";
import { UiMock } from "../../../src/xrm-mock/ui/ui.mock";

describe("Tab Mock", () => {
  let ui: UiMock;
  let tab: TabMock;

  beforeEach(() => {
    ui = new UiMock({
      formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>([
        new FormItemMock({
          currentItem: true,
          formType: 2,
          id: "5",
          label: "Main",
        }),
      ])),
    });
    tab = new TabMock({
      displayState: "expanded",
      name: "Main Details",
      parent: ui,
    });
  });

  it("should exist", () => {
    expect(tab).toBeDefined();
  });

  it("should be called Main Details", () => {
    expect(tab.getName()).toBe("Main Details");
  });

  it("should be expanded", () => {
    expect(tab.getDisplayState()).toBe("expanded");
  });

  it("should get its parent Ui", () => {
    expect(tab.getParent()).toMatchObject(ui);
  });
});

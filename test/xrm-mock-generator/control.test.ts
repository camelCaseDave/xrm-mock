import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { PageMock } from "../../src/xrm-mock/page/page.mock";

describe("XrmMockGenerator.Control", () => {
  let page: PageMock;
  beforeEach(() => {
    page = XrmMockGenerator.initialise().Page;
  });

  it("should create a grid control", () => {
    const contactsGrid = XrmMockGenerator.Control.createGrid("contacts");
    const accoutnsGrid = XrmMockGenerator.Control.createGrid({
        entityName: "account",
        name: "accounts",
    });
    expect(contactsGrid.getControlType()).toBe("subgrid");
    expect(Xrm.Page.getControl<Xrm.Controls.GridControl>("accounts").getEntityName()).toBe("account");
    expect(contactsGrid.getVisible()).toBe(true);
    contactsGrid.setVisible(false);
    expect(contactsGrid.getVisible()).toBe(false);
  });
});

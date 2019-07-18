import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { PageMock } from "../../src/xrm-mock/page/page.mock";

describe("XrmMockGenerator.Control", () => {
  let page: PageMock;
  beforeEach(() => {
    page = XrmMockGenerator.initialise().Page;
  });

  it("should create a grid control", () => {
    XrmMockGenerator.Control.createGrid("contacts");
    XrmMockGenerator.Control.createGrid({
        entityName: "account",
        name: "accounts",
    });
    expect(Xrm.Page.getControl("contacts").getControlType()).toBe("subgrid");
    expect(Xrm.Page.getControl<Xrm.Controls.GridControl>("accounts").getEntityName()).toBe("account");
  });
});

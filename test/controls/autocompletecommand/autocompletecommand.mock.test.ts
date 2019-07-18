import { AutoCompleteCommandMock } from "../../../src/xrm-mock/";

describe("Xrm.Controls.AutoCompleteCommand Mock", () => {
  beforeEach(() => {
    this.autoCompleteCommand = new AutoCompleteCommandMock("1", "Done", "/png/someImage.png", () => { alert("Action."); });
  });

  it("should exist", () => {
    expect(this.autoCompleteCommand).toBeDefined();
  });
});
